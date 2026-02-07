import pandas as pd
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.linear_model import LogisticRegression
import pickle

data = pd.read_csv("gst_data.csv")

X = data["product"]
y = data["gst"]

vectorizer = CountVectorizer()
X_vec = vectorizer.fit_transform(X)

model = LogisticRegression()
model.fit(X_vec, y)

pickle.dump(model, open("gst_model.pkl", "wb"))
pickle.dump(vectorizer, open("vectorizer.pkl", "wb"))

print("Model trained successfully!")