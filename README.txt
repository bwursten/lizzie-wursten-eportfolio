LIZZIE WURSTEN EPORTFOLIO - QUICK EDIT GUIDE
============================================

Folder Structure:
-----------------
lizzie-wursten-eportfolio/
  ├── index.html                        (Main home page with About Me + 4 clickable Section Divider cards)
  ├── disciples-of-jesus-christ.html    (Outcome 1 Section & Page)
  ├── sound-thinkers.html               (Outcome 2 Section & Page)
  ├── effective-communicators.html      (Outcome 3 Section & Page)
  ├── skilled-collaborators.html        (Outcome 4 Section & Page)
  ├── styles.css                        (Minimalist Modern black/white/gray stylesheet)
  ├── images/                           (Put your .jpg or .png photos here)
  └── documents/                        (Put your .pdf, .docx, or .pptx files here)

How to Add Your Pictures:
-------------------------
1. Copy your image files into the `images/` folder.
2. Open any `.html` file in a text editor (like VS Code, TextEdit, or Notepad).
3. Find `<div class="image-placeholder">...</div>` and replace that block with:
   <img src="images/your-photo.jpg" alt="Description of photo" style="width:100%; height:220px; object-fit:cover;">

How to Add Your Documents:
--------------------------
1. Copy your PDF or Word files into the `documents/` folder.
2. In the `.html` file, change `href="documents/..."` to match your exact filename (e.g., `href="documents/my-essay.pdf"`).
