<template>
  <div>
    <div class="header">
      <h1>Quản lý đơn hàng</h1>
    </div>

    <div class="container">
      <div class="order-list">
        <h2>Danh sách đơn hàng</h2>
        <table>
          <tr>
            <th>STT</th>
            <th>Sản Phẩm</th>
            <th>Số lượng</th>
            <th>Giá</th>
            <th>Trạng thái giao hàng</th>
            <th>Trạng Thái Đơn Hàng</th>
          </tr>
          <tr>
            <td>1</td>
            <td>A</td>
            <td>3</td>
            <td>40</td>
            <td>Đang giao hàng</td>
            <td>Chờ xác nhận</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped>
.order-list {
  flex: 1;
  padding: 20px;
  border-right: 1px solid #ddd;
}

.order-list h2 {
  color: #333;
  width: 80%;
}

.order-list ul {
  list-style-type: none;
  padding: 0;
}

.order-list li {
  padding: 10px;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
}

.order-list li:hover {
  background-color: #f5f5f5;
}

.order-details {
  flex: 2;
  padding: 20px;
}

.order-details h2 {
  color: #333;
}

.order-details p {
  margin-bottom: 10px;
}

.order-details span {
  font-weight: bold;
}
</style>