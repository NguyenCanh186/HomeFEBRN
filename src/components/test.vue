<template>
  <div class="about">
    <button type="button" class="btn btn-success" style="margin-right: -1000px" @click="openModal()">Add New</button>

    <!-- Modal -->
    <div v-if="showModal" class="modal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Information</h5>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" class="form-control" id="name">
              </div>
              <div class="form-group">
                <label for="address">Address:</label>
                <input type="text" class="form-control" id="address">
              </div>
              <div class="form-group">
                <label for="telephone">Telephone:</label>
                <input type="text" class="form-control" id="telephone">
              </div>
              <div class="form-group">
                <label for="age">Age:</label>
                <input type="text" class="form-control" id="age">
              </div>
              <div class="form-group">
                <label for="province">Province:</label>
                <select class="form-control" id="province">
                  <option selected>Province...</option>
                  <option value="1">3</option>
                  <option value="2">4</option>
                  <option value="3">5</option>
                </select>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" @click="addCustomer">Add</button>
            <button type="button" class="btn btn-secondary" @click="closeModal">Close</button>
          </div>
        </div>
      </div>
    </div>

    <table class="table mt-2">
      <thead>
      <tr>
        <th scope="col">Stt</th>
        <th scope="col">Name</th>
        <th scope="col">Address</th>
        <th scope="col">Telephone</th>
        <th scope="col">Age</th>
        <th scope="col">Province</th>
        <th scope="col">Action</th>
      </tr>
      </thead>
      <tr v-for="customers in customer" :key="customers.id">
        <td>{{ customers.id }}</td>
        <td>{{ customers.name }}</td>
        <td>{{ customers.address }}</td>
        <td>{{ customers.telephone }}</td>
        <td>{{ customers.age }}</td>
        <td>{{ customers.province.name }}</td>
        <td>
          <button style="margin-right: 30px" type="button" class="btn btn-warning">Edit</button>
          <button type="button" class="btn btn-danger">Delete</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { GetDataService } from "@/views/customer/customerservice";

export default {
  name: "BlogAdmin",

  data() {
    return {
      customer: null,
      showModal: false
    };
  },
  created() {
    this.getBlog();
  },
  methods: {
    getBlog() {
      GetDataService.getCustomer().then((response) => {
        this.customer = response.data;
      });
    },
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    addCustomer() {
      // Logic to add customer here
      this.closeModal();
    }
  }
};
</script>
