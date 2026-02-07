function updateProduct() {
  const product = document.getElementById("productSelect").value;
  const img = document.getElementById("productImg");
  const gstText = document.getElementById("gstText");

  console.log("Selected:", product);

  if (!product) {
    img.src = "/static/logos/default.png";
    gstText.innerText = "GST: --%";
    return;
  }

  const imagePath = "/static/logos/" + product + ".png";
  console.log("Loading image:", imagePath);

  img.src = imagePath;

  img.onerror = () => {
    console.error("Image not found:", imagePath);
    img.src = "/static/logos/default.png";
  };

  fetch("/get_gst", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ product })
  })
  .then(res => res.json())
  .then(data => {
    gstText.innerText = "GST: " + data.gst_percent + "%";
  });
}
function addItem() {
  const product = document.getElementById("productInput").value;
  const price = document.getElementById("priceInput").value;

  fetch("/get_gst", {
    method: "POST",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify({product, price})
  })
  .then(res=>res.json())
  .then(data=>{
    const table = document.getElementById("cartTable");
    const row = table.insertRow();

    row.innerHTML = `
<td><img src="/static/logos/${data.product}.png" width="40"></td>
<td>${data.product}</td>
<td>${data.price}</td>
<td>${data.gst_percent}%</td>
<td>${data.gst_amt}</td>
<td class="totalCell">${data.total}</td>
<td><button onclick="removeRow(this)">❌</button></td>
`;

    total += data.total;
    document.getElementById("grandTotal").innerText = "Grand Total: ₹"+total;
  });
}

function loadTrends(product) {
  fetch(`/gst_trends/${product}`)
    .then(res => res.json())
    .then(data => {
      const years = data.map(d => d.year);
      const gstValues = data.map(d => d.gst);

      const ctx = document.getElementById("gstChart").getContext("2d");

      if(window.gstChart){
        window.gstChart.destroy();
      }

      window.gstChart = new Chart(ctx, {
        type: "line",
        data: {
          labels: years,
          datasets: [{
            label: "GST %",
            data: gstValues,
            borderColor: "#00ffff",
            backgroundColor: "transparent",
            tension: 0.4,
            pointRadius: 4
          }]
        },
        options: {
          responsive: true,
          scales: { y: { beginAtZero: true } }
        }
      });
    });
}

window.onload = loadTrends;
const translations = {
  en: {
    title: "Smart GST AI Billing System",
    finder: "Product Finder",
    add: "Add Product",
    cart: "Cart",
    trend: "Yearly GST Trends",
    addBtn: "Add to Cart"
  },
  te: {
    title: "స్మార్ట్ GST బిల్లింగ్ సిస్టమ్",
    finder: "ఉత్పత్తి శోధన",
    add: "ఉత్పత్తి జోడించండి",
    cart: "కార్ట్",
    trend: "GST ధోరణులు",
    addBtn: "కార్ట్‌కి జోడించండి"
  },
  hi: {
    title: "स्मार्ट GST बिलिंग सिस्टम",
    finder: "उत्पाद खोज",
    add: "उत्पाद जोड़ें",
    cart: "कार्ट",
    trend: "GST ट्रेंड",
    addBtn: "कार्ट में जोड़ें"
  }
};

function changeLanguage() {
  const lang = document.getElementById("langSelect").value;

  const title = document.getElementById("titleText");
  const finder = document.getElementById("finderTitle");
  const trend = document.getElementById("trendTitle");
  const add = document.getElementById("addTitle");

  if (title) title.innerText = translations[lang].title;
  if (finder) finder.innerText = translations[lang].finder;
  if (trend) trend.innerText = translations[lang].trends;
  if (add) add.innerText = translations[lang].add;
}
function removeRow(btn){
  const row = btn.parentElement.parentElement;
  row.remove();
  updateGrandTotal();
}
function updateGrandTotal(){
  let total = 0;
  document.querySelectorAll(".totalCell").forEach(cell=>{
    total += parseFloat(cell.innerText);
  });
  document.getElementById("grandTotal").innerText = total.toFixed(2);
}
function onProductChange() {
  const product = document.getElementById("productSelect").value.toLowerCase();
  loadTrends(product);
}
window.onload = () => {
  loadTrends("rice");
};
let gstChart = null;

function updateProduct() {
  const product = document.getElementById("productSelect").value;
  if (!product) return;
  loadTrends(product);
}

function loadTrends(product) {
  fetch(`/gst_trends/${product}`)
    .then(res => res.json())
    .then(data => {
      const years = data.map(r => r.year);
      const gst = data.map(r => r.gst);

      const ctx = document.getElementById("gstChart").getContext("2d");

      if (gstChart) gstChart.destroy();

      gstChart = new Chart(ctx, {
        type: "line",
        data: {
          labels: years,
          datasets: [{
            data: gst,
            borderWidth: 3,
            tension: 0.4
          }]
        },
        options: {
          responsive: true,
          plugins: { legend: { display: false } }
        }
      });
    });
}

window.onload = () => {
  loadTrends("rice");
};