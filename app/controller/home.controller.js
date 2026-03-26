class HomeController {
  Home = async (req, res) => {
    res.render("home");
  };

  Products = async (req, res) => {
    const products = [
      {
        name: "iPhone 15 Pro Max",
        price: "₹80,000",
        description: "Premium Apple smartphone with A16 chip",
        size: ["128GB", "256GB", "512GB"],
        color: ["Black", "White", "Orange"],
        category: "Mobile",
        rating: 4.8,
        image:
          "https://images.unsplash.com/photo-1736173155811-e8142fd553ee?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Samsung S24",
        price: "₹70,000",
        description: "Flagship Android phone with powerful performance",
        size: ["128GB", "256GB"],
        color: ["Black", "Purple", "Blue"],
        category: "Mobile",
        rating: 4.6,
        image:
          "https://images.unsplash.com/photo-1706372124839-f35d821ccd24?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "OnePlus 12",
        price: "₹60,000",
        description: "Fast and smooth experience with OxygenOS",
        size: ["128GB", "256GB", "1TB"],
        color: ["Green", "Black", "Silver"],
        category: "Mobile",
        rating: 4.1,
        image:
          "https://images.unsplash.com/photo-1614796740292-50ae67262ff0?q=80&w=1039&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "MacBook Air",
        price: "₹1,10,000",
        description: "Lightweight laptop with M2 chip",
        size: ["8GB", "16GB"],
        color: ["Silver", "Space Gray"],
        category: "Laptop",
        rating: 4.9,
        image:
          "https://images.unsplash.com/photo-1606229365485-93a3b8ee0385?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Lenovo Thinkbook",
        price: "₹85,000",
        description: "Ultra premium Windows laptop",
        size: ["8GB", "16GB", "32GB"],
        color: ["Silver", "Black"],
        category: "Laptop",
        rating: 3.1,
        image:
          "https://images.unsplash.com/photo-1763162139130-240507e9fad5?q=80&w=2521&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Sony Headphones",
        price: "₹15,000",
        description: "Noise cancelling headphones",
        size: ["Standard"],
        color: ["Black"],
        category: "Accessories",
        rating: 4.2,
        image:
          "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Nike Speed",
        price: "₹5,999",
        description: "Boost your inner power",
        size: ["6 UK", "7 UK", "8 UK", "9 UK", "10 UK"],
        color: ["Red", "White"],
        category: "Shoes",
        rating: 4.2,
        image:
          "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Nike Super Go",
        price: "₹7,999",
        description: "Get Set Go",
        size: ["4 UK", "7 UK", "8 UK", "9 UK"],
        color: ["Green", "Blue", "Yellow"],
        category: "Shoes",
        rating: 3.7,
        image:
          "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Reebok Red Dragon",
        price: "₹9,999",
        description: "Feel the aura of ancient flame",
        size: ["4 UK", "5 UK", "7 UK", "8 UK", "9 UK"],
        color: ["Red (Special Edition)"],
        category: "Shoes",
        rating: 4.6,
        image:
          "https://images.unsplash.com/photo-1584737969339-21edebd193ae?q=80&w=1997&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Vogon Shirts",
        price: "₹1,099",
        description: "Comfy as always",
        size: ["S", "M", "L", "XL", "XXL"],
        color: ["Blue check", "White check", "Cyan check"],
        category: "Clothing",
        rating: 2.3,
        image:
          "https://images.unsplash.com/photo-1642764873654-9eef0467b342?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Levi's Classic Shirt",
        price: "₹2,499",
        description: "Timeless denim-inspired casual shirt",
        size: ["S", "M", "L", "XL"],
        color: ["Dark Blue", "Light Blue", "Black"],
        category: "Clothing",
        rating: 4.5,
        image:
          "https://images.unsplash.com/photo-1544610280-5265bdceba0c?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Zara Winter Shirt",
        price: "₹3,290",
        description: "Modern winter shirt with premium finish",
        size: ["S", "M", "L", "XL"],
        color: ["White", "Beige", "Olive", "demi-yellow"],
        category: "Clothing",
        rating: 4.3,
        image:
          "https://images.unsplash.com/photo-1681991724832-56e4ccc04415?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "H&M Casual Cotton Shirt",
        price: "₹1,799",
        description: "Soft cotton shirt for everyday comfort",
        size: ["S", "M", "L", "XL"],
        color: ["Sky Blue", "Grey", "Black"],
        category: "Clothing",
        rating: 4.1,
        image:
          "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Allen Solly Formal Shirt",
        price: "₹2,199",
        description: "Elegant formal shirt for office wear",
        size: ["S", "M", "L", "XL", "XXL"],
        color: ["White", "Light Pink", "Blue"],
        category: "Clothing",
        rating: 4.4,
        image:
          "https://images.unsplash.com/photo-1740711152088-88a009e877bb?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Peter England Checked Shirt",
        price: "₹1,599",
        description: "Stylish checked shirt with relaxed fit",
        size: ["S", "M", "L", "XL"],
        color: ["Red Check", "Blue Check", "Green Check"],
        category: "Clothing",
        rating: 4.2,
        image:
          "https://images.unsplash.com/photo-1687275160744-ef140bf5529c?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Gucci GG Marmont Bag",
        price: "₹1,89,000",
        description: "Luxury quilted leather handbag with iconic GG logo",
        size: ["Small", "Medium"],
        color: ["Black", "Beige", "Red"],
        category: "Handbags",
        rating: 4.8,
        image:
          "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Caprese Satchel Bag",
        price: "₹3,499",
        description: "Elegant satchel bag with modern design",
        size: ["Standard"],
        color: ["Pink", "Tan", "Black"],
        category: "Handbags",
        rating: 4.2,
        image:
          "https://images.unsplash.com/photo-1711548244653-72219aa9ac27?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Michael Kors Jet Set Tote",
        price: "₹18,999",
        description: "Spacious and stylish tote for daily use",
        size: ["Medium", "Large"],
        color: ["Brown", "Vanilla", "Black"],
        category: "Accessories",
        rating: 4.5,
        image:
          "https://images.unsplash.com/photo-1559563458-527698bf5295?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Apple AirPods Pro (2nd Gen)",
        price: "₹24,900",
        description: "Active noise cancellation with immersive sound",
        size: ["Standard"],
        color: ["White"],
        category: "Earpods",
        rating: 4.7,
        image:
          "https://images.unsplash.com/photo-1657560566744-06d0b69f6647?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Fossil Gen 6 Smartwatch",
        price: "₹22,995",
        description:
          "Stylish smartwatch with fitness tracking and AMOLED display",
        size: ["42mm", "44mm"],
        color: ["Black", "Brown", "Silver"],
        category: "Wearables",
        rating: 4.4,
        image:
          "https://images.unsplash.com/photo-1619037961428-e6410a7afd38?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ];

    res.render("products", { products });
  };
}

module.exports = new HomeController();
