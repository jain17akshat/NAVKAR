
# Navkar Fashion

## Local Product Images Setup

### Image Folder Structure

Product images are organized in the following folders:

```
public/
  └── images/
      ├── categories/
      │   ├── mens-collection.jpg
      │   ├── womens-collection.jpg
      │   ├── kids-collection.jpg
      │   └── blazers-collection.jpg
      └── products/
          ├── men/
          │   └── men-1.jpg, men-2.jpg, etc.
          ├── women/
          │   └── women-1.jpg, women-2.jpg, etc.
          ├── kids/
          │   └── kids-1.jpg, kids-2.jpg, etc.
          ├── blazers/
          │   └── blazer-1.jpg, blazer-2.jpg, etc.
          └── general/
              └── product-1.jpg, product-2.jpg, etc.
```

### Adding Your Own Images

1. Prepare your product images, ideally in a 1:1 aspect ratio for best display
2. Name your files according to the convention above (e.g., `men-1.jpg`, `women-2.jpg`)
3. Place the files in their respective folders
4. The application will automatically load these images from the local folders

### Image Naming Convention

- Category images: `category-name.jpg` (e.g., `mens-collection.jpg`)
- Product images: `category-number.jpg` (e.g., `men-1.jpg`, `women-2.jpg`)

### Recommended Image Specifications

- Resolution: 800x800 pixels (minimum)
- Format: JPG or PNG
- Aspect ratio: 1:1 (square)
- File size: Optimize for web (< 200KB per image)
