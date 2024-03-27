var sanpham = [
    {
        id: 1,
        name: "Nhà Hàng Tàu",
        price: "2.000.000.000",
        image: "https://tdtdecor.vn/wp-content/uploads/2024/01/thiet-ke-nha-hang-trung-hoa-1.jpg"
    },
    {
        id: 2,
        name: "Nhà Hàng Mỹ",
        price: "12.000.000.000",
        image: "https://wiki-travel.com.vn/Uploads/picture/alicegiangnguyen-233013103059-nha-hang-o-my-3.jpg"
    },
    {
        id: 3,
        name: "Nhà Hàng Việt",
        price: "1.000.000.000",
        image: "https://haphong.com/wp-content/uploads/2021/02/HAP0863-copy.jpg"
    }
];

function Add() {
    var id = document.getElementById("id").value;
    var name = document.getElementById("name").value;
    var image = document.getElementById("image").value;
    var price = document.getElementById("price").value;

    sanpham.push({ id: id, name: name, image: image, price: price });
    Reset();
    Show();
}

function Show() {
    var tableBody = document.getElementById("nhahang");
    tableBody.innerHTML = "";
  
    for (var i = 0; i < sanpham.length; i++) {
      var row =
        "<tr><td>" +
        sanpham[i].id +
        "</td><td>" +
        sanpham[i].name +
        "</td><td><img src='" +
        sanpham[i].image +
        "' alt='Product Image' style='width:100px;height:auto;'></td><td>" +
        sanpham[i].price +
        "</td><td><button onclick='ViewDetail(" +
        i + 
        ")' class='btn btn-info'>View Detail</button></td><td><button onclick='Edit(" +
        i +
        ")' class='btn btn-primary'>Edit</button> <button onclick='Delete(" +
        i +
        ")' class='btn btn-danger'>Delete</button></td></tr>";
      tableBody.innerHTML += row;
    }
  }
  
  function ViewDetail(index) {
    window.location.href = "product_detail.html?index=" + index;
  }

function Reset() {
    document.getElementById("id").value = "";
    document.getElementById("name").value = "";
    document.getElementById("image").value = "";
    document.getElementById("price").value = "";
}

function Edit(index) {
    var product = sanpham[index];
    document.getElementById("id").value = product.id;
    document.getElementById("name").value = product.name;
    document.getElementById("image").value = product.image;
    document.getElementById("price").value = product.price;

    sanpham.splice(index, 1);
    Show();
}

function Delete(index) {
    sanpham.splice(index, 1);
    Show();
}
{
    function searchProduct() {
        var searchValue = document.getElementById("searchName").value.toLowerCase();
        var filteredProducts = sanpham.filter(function(product) {
            return product.name.toLowerCase().includes(searchValue);
        });
        displayProducts(filteredProducts);
    }
    
    function displayProducts(products) {
        var tableBody = document.getElementById("nhahang");
        tableBody.innerHTML = "";
    
        for (var i = 0; i < products.length; i++) {
            var row = "<tr><td>" + products[i].id + "</td><td>" + products[i].name + "</td><td><img src='" + products[i].image + "' alt='Product Image' style='width:100px;height:auto;'></td><td>" + products[i].price + "</td><td><button onclick='Edit(" + i + ")' class='btn btn-primary'>Edit</button> <button onclick='Delete(" + i + ")' class='btn btn-danger'>Delete</button></td></tr>";
            tableBody.innerHTML += row;
        }
    }
    
    function Reset() {
        document.getElementById("id").value = "";
        document.getElementById("name").value = "";
        document.getElementById("image").value = "";
        document.getElementById("price").value = "";
    }
    
}