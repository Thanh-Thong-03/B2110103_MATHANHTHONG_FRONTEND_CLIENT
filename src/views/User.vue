<template>
  <div>
    <div class="user-container">
      <div class="user-avatar">
        <img src="https://www.shutterstock.com/image-vector/user-icon-trendy-flat-style-260nw-418179865.jpg" alt="User Avatar" />
      </div>
      <div class="user-details">
        <h2>User Name</h2>
        <p><span class="label">Email:</span> user@example.com</p>
        <p><span class="label">Phone:</span> +1 234 567 890</p>
        <p><span class="label">Address:</span> 123 Street, City, Country</p>
      </div>
      <a href="#" class="back-btn">Back to Users</a>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
 .user-container {
      max-width: 800px;
      margin: 20px auto;
      background-color: #fff;
      padding: 20px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      border-radius: 8px;
    }

    .user-avatar {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      margin-bottom: 20px;
      overflow: hidden;
    }

    .user-avatar img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .user-details {
      text-align: left;
    }

    .user-details h2 {
      color: #333;
      margin-bottom: 10px;
    }

    .user-details p {
      color: #666;
      margin-bottom: 8px;
    }

    .user-details .label {
      font-weight: bold;
    }

    .back-btn {
      display: inline-block;
      padding: 8px 16px;
      background-color: #4caf50;
      color: #fff;
      text-decoration: none;
      border-radius: 4px;
      margin-top: 20px;
    }

    .back-btn:hover {
      background-color: #45a049;
    }
</style>