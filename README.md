# 🎯 Detection of Face-Swap Based Deepfake Videos using AI/ML

This project focuses on developing a system capable of detecting **face-swap-based deepfake videos** with a high degree of accuracy and reliability using **Artificial Intelligence (AI)** and **Machine Learning (ML)** techniques.

---

##  Abstract
The proposed system detects deepfakes in images and videos using deep learning models trained on authentic and manipulated media.  
It overcomes traditional limitations by combining **spatial** (frame-based) and **temporal** (motion-based) analysis to detect even subtle manipulations such as facial swaps, lip-sync mismatches, and unnatural expressions.

Our model architecture integrates **CNNs (Convolutional Neural Networks)** for feature extraction and **RNNs/Transformers** for analyzing motion patterns across frames.  
This multi-modal approach ensures better detection accuracy and generalization across various datasets and manipulation methods.

---

## 📚 Literature Review (Prior Work)
Several deepfake detection models have been proposed in recent years:

1. **MesoNet (Afchar et al., 2018):** Detects subtle facial inconsistencies in compressed videos.  
2. **FaceForensics++ (Rossler et al., 2019):** Benchmark dataset with XceptionNet-based detection.  
3. **CNN-LSTM (Guera & Delp, 2018):** Focused on detecting unnatural motion or blinking patterns.  
4. **Celeb-DF (Li et al., 2020):** Improved dataset revealing the need for better generalization.  
5. **Frequency-domain Detection (Durall et al., 2020):** Used frequency patterns rather than image cues.

---

## ⚠️ Limitations of Existing Systems
- Poor generalization across datasets  
- Sensitivity to compression and low-quality videos  
- Lack of real-time detection  
- Vulnerability to adversarial attacks  
- Limited use of multi-modal features (audio + video)

---

## 🚀 Advancements in Our Proposed Work
✅ Combines **CNN (spatial)** and **LSTM/Temporal CNN (temporal)** analysis  
✅ Uses **MediaPipe** for face alignment and region focus  
✅ Integrates **Grad-CAM** visual heatmaps for transparency  
✅ Lightweight and optimized for web-based deployment (Vercel + Flask)  
✅ Audio-visual synchronization checks for improved accuracy  

---

## 🎯 Objectives
1. Detect deepfake videos with high accuracy.  
2. Analyze spatial and temporal inconsistencies.  
3. Train and test on diverse datasets (FaceForensics++, Celeb-DF, DFDC).  
4. Use multi-modal analysis for better reliability.  
5. Develop a lightweight real-time detection model.  
6. Provide visual explanations for user transparency.  
7. Evaluate accuracy, precision, recall, and F1-score.

---

## ⚙️ Methodology
1. **Data Collection:** Use FaceForensics++, Celeb-DF, DFDC datasets.  
2. **Frame Extraction:** Split videos into frames.  
3. **Face Detection:** Use **MediaPipe** or **OpenCV** to isolate faces.  
4. **Feature Extraction:** Apply **CNN (XceptionNet/MobileNet)** for visual features.  
5. **Deepfake Detection:** Use classifier (Neural Network or CNN-LSTM).  
6. **Training & Testing:** Evaluate on unseen data for performance.  
7. **Results:** Display detection status with probability and visual explanation.

---

## 🧩 Tech Stack
| Component | Tools / Frameworks |
|------------|--------------------|
| **Frontend** | HTML, CSS, JavaScript / Next.js |
| **Backend** | Flask, Python |
| **AI / ML** | TensorFlow, PyTorch |
| **Face Processing** | OpenCV, MediaPipe |
| **Deployment** | Vercel (Frontend), Flask API (Backend) |

---

## 🧪 Datasets
- **FaceForensics++** — Real and fake video dataset  
- **Celeb-DF** — Celebrity deepfakes with high realism  
- **DFDC** — Facebook’s large-scale deepfake dataset  

---

## 📈 Results
The developed system successfully identifies deepfake content by analyzing both visual and temporal inconsistencies.  
It demonstrates strong potential for real-time or mobile deployment and contributes toward secure, trustworthy digital environments.

---

## 🔍 Conclusion
The project delivers a reliable system for **deepfake video detection**, addressing key challenges such as dataset generalization, temporal feature extraction, and user transparency.  
It provides a scalable solution that can evolve into a production-ready deepfake detection platform.

---

**Guide:** Prof. Jyothi S S  
**Department of Computer Science & Engineering, Sambhram Institute of Technology**

---

## 🌐 Deployment
🔗 Live Demo: [ai-ml-deepfake-detection.vercel.app](https://ai-ml-deepfake-detection.vercel.app)
