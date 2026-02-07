from flask import Flask, render_template, request, jsonify
import pandas as pd

app = Flask(__name__)

gst_df = pd.read_csv("data/gst_data.csv")
trend_df = pd.read_csv("data/gst_trends.csv")

gst_df["product"] = gst_df["product"].str.lower()
trend_df["product"] = trend_df["product"].str.lower()

@app.route("/")
def home():
    return render_template("billing.html")

@app.route("/get_gst", methods=["POST"])
def get_gst():
    data = request.json
    product = data.get("product").lower()
    price = float(data.get("price"))

    row = gst_df[gst_df["product"] == product]
    if row.empty:
        return jsonify({"error": "Product not found"})

    gst_percent = float(row.iloc[0]["gst"])
    gst_amt = round(price * gst_percent / 100, 2)
    total = round(price + gst_amt, 2)

    return jsonify({
        "product": product,
        "price": price,
        "gst_percent": gst_percent,
        "gst_amt": gst_amt,
        "total": total
    })

@app.route("/gst_trends/<product>")
def gst_trends(product):
    filtered = trend_df[trend_df["product"] == product.lower()]
    return jsonify(filtered.to_dict(orient="records"))
if __name__ == "__main__":
    app.run(debug=True)