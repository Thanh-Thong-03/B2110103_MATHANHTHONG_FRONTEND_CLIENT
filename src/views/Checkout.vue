<template>
  <div class="container">
    <h1>Trang thanh toán</h1>

    <div class="row">
      <div class="col-md-6">
        <h3>Thông tin khách hàng</h3>
        <form>
          <div class="form-group">
            <label>Tên:</label>
            <input type="text" class="form-control" required />
          </div>
          <div class="form-group">
            <label>Địa chỉ:</label>
            <input type="text" class="form-control" required />
          </div>
          <div class="form-group">
            <label>Số điện thoại:</label>
            <input type="tel" class="form-control" required />
          </div>
          <div class="form-group">
            <label>Email:</label>
            <input type="email" class="form-control" required />
          </div>
          <div class="form-group">
            <label>Ghi chú:</label>
            <input type="text" class="form-control" required />
          </div>
        </form>
      </div>
      <div class="col-md-6">
        <h3>Thông tin đơn hàng</h3>
        <table>
          <thead>
            <tr>
              <th>Tên sản phẩm</th>
              <th>Loai</th>
              <th>Số lượng</th>
              <th>Giá</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img src="https://mcdn.coolmate.me/image/February2023/mceclip10_61.jpg" class="img" />
                Camera Sony Alpha A7III
            </td>
              <td><input type="number"></td>
              <td>1999</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="row">
      <div class="col-md-6">
        <h3>Phương thức thanh toán</h3>
        <div class="form-check">
          <input
            type="radio"
            class="form-check-input"
            id="online"
            name="payment"
            required
          />
          <label class="form-check-label" for="online"
            >Thanh toán trực tuyến</label
          >
        </div>
        <div class="form-check">
          <input
            type="radio"
            class="form-check-input"
            id="cod"
            name="payment"
            required
          />
          <label class="form-check-label" for="cod"
            >Thanh toán khi nhận hàng</label
          >
        </div>
      </div>

      <div class="col-md-6">
        <h3>Tổng tiền:</h3>
        <h4>1999</h4>
        <button type="submit" class="btn btn-primary">Đặt Hàng</button>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
.container {
    width: 100%;
}

.row {
    width: 100%;

}

img {
    width:60px;
    height:60px;
}


</style>