# 🌟 My Image Gallery

Welcome to the **My Image Gallery** project! This application is a modern, responsive image gallery built using **Next.js**. Users can easily view a collection of images in a beautiful grid layout, with an interactive modal that displays full-sized images on click.

![Gallery Preview](./path_to_your_screenshot.png)

---

## 🚀 Features

- 📷 **Responsive Image Grid**: Displays images in a visually appealing grid layout.
- 🔍 **Modal Image View**: Click on any image to view it in full size.
- 📂 **Dynamic Image Loading**: Automatically loads images from the `images/` folder.
- 🎨 **CSS Grid Layout**: Ensures a responsive and beautiful gallery.
- 🖼️ **Zoom-in Effect**: Enjoy a smooth zoom-in experience when expanding images.
- ⚡ **Fast and lightweight**: Powered by **Next.js**, ensuring excellent performance.

---

## 🛠️ Tech Stack

- **Frontend**: React, Next.js
- **Styling**: CSS Grid, Flexbox
- **Modal**: Custom JavaScript functions for opening and closing the modal view
- **Hosting**: Deploy on platforms like **Vercel** or **Netlify**

---

## 📂 Folder Structure

```bash
/my-image-gallery
│
├── /public
│   └── /images          # Your gallery images
│       ├── image1.jpg
│       ├── image2.jpg
│       └── ...
│
├── /components
│   └── ImageGallery.js   # The main gallery component
│
├── /styles
│   └── ImageGallery.module.css  # CSS for gallery styling
│
└── /pages
    └── index.js          # The main page of your gallery
How It Works
Image Grid: The ImageGallery.js component fetches all images dynamically from the /public/images/ directory and displays them in a responsive grid using CSS Grid.
Modal View: When you click on any image, a modal pops up, showing the image in full size. You can close the modal by clicking outside the image or on the close button.
Responsive Design: The layout adjusts to different screen sizes, ensuring a smooth user experience on both desktop and mobile devices.
📸 Screenshots

![image](https://github.com/user-attachments/assets/d5a704d7-b1d8-4ca9-9ebc-b49b4460b339)
