# 🤖 GST_AI_PRO – Intelligent GST Assistant  

Welcome to **GST_AI_PRO**, an AI-powered assistant designed to help users understand, analyze, and interact with **Goods and Services Tax (GST)** information efficiently.  
This project leverages **AI + RAG (Retrieval-Augmented Generation)** techniques to provide accurate and context-aware responses related to GST rules, filing, and compliance.

---

## 📌 Project Overview  

| Feature | Description |
|---------|-------------|
| 📊 Domain | Goods and Services Tax (GST) |
| 🤖 AI Type | RAG-based Chatbot |
| 🖥️ UI | Streamlit |
| ☁️ Deployment | Streamlit Cloud / Local |
| 🔍 Functionality | Query GST laws, compliance, filing info |

---

## ✨ Key Features  

- AI-powered GST query resolution  
- Retrieval-Augmented Generation (RAG) pipeline  
- User-friendly Streamlit interface  
- Supports document-based GST information  
- Fast and accurate responses  
- Cloud deployment ready  

---

## 🎯 How It Works  

1. User asks a GST-related question  
2. System retrieves relevant documents  
3. AI model analyzes the context  
4. Generates accurate answers  
5. Displays results in real-time  

---

## 📂 Project Structure  

GST_AI_PRO/  
│  
├── app.py  
├── requirements.txt  
├── data/  
├── models/  
├── utils/  
└── README.md  

---

## 🖥️ Run Locally  

### Clone the Repository  

git clone https:https://github.com/BhavyaKavuru/smart-gst.git
cd GST_AI_PRO  

### Install Dependencies  

pip install -r requirements.txt  

### Run the Application  

streamlit run app.py  

---

## 🚀 Deployment  

### Streamlit Cloud  
- Sign in at **[Streamlit Cloud](https://streamlit.io/cloud)**  
- Create a *New App*  
- Connect your GitHub repo and select the chatbot folder (app.py)  
- Add your dependencies from requirements.txt  
- Deploy the app — Streamlit will build and serve it automatically  
- 🔗 The deployed app link will appear in your Streamlit dashboard

 #### 🚀 Localhost

▶️ Run on Localhost Using Flask

If your project uses Flask, follow these steps:

Install Dependencies
pip install -r requirements.txt

Run Flask App
python app.py


or

flask run

Open in Browser
http://127.0.0.1:5000


or

http://localhost:5000


(Default Flask port: 5000)

▶️ Run on Localhost Using FastAPI

If your project uses FastAPI, follow these steps:

Install Dependencies
pip install -r requirements.txt

Run FastAPI Server
uvicorn main:app --reload


(Replace main with your file name if different)

Open in Browser
http://127.0.0.1:8000

## 🚀 installaton commands

git clone https://github.com/your-username/GST_AI_PRO.git
cd GST_AI_PRO
python -m venv venv
source venv/bin/activate
pip install --upgrade pip
pip install -r requirements.txt
python app.py

## 🛠️ Tech Stack  

- Python 3.9+  
- Streamlit  
- Hugging Face Transformers  
- RAG Architecture  
- Vector Database  

---

## 📜 License  

MIT License  

---

⭐ If you like this project, give it a star!
