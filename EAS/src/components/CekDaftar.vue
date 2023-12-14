<template>
  <div class="container-join">
    <form class="join-form" @submit.prevent="checkStatus">
      <h2 class="page-start">Cek Status</h2>
      <div class="join-box">
        <input class="form-input input" type="email" v-model="Email" placeholder="Email" required />
      </div>
      <button class="btn form-button" style="text-align: center;" type="submit">Cek</button>

      <h2 class="page-start">{Status.value}</h2>
    </form>

  </div>

</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const Email = ref("");

const checkStatus = async () => {
  const res = await fetch("http://localhost:3000/api/Form", {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({

    }),
  });

  const json = await res.json();
  console.log(json);
  if (!res.ok) {
    console.log("Email: " + Email.value + " gagal Fetch");
  } else {
    console.log("Email: " + Email.value + " telah berhasil Fetch");
  }
};
</script>
  
<!-- <script setup>
import { ref } from "vue";

const email = ref("");
const statusMessage = ref("");

const checkStatus = async () => {
  // Assuming your API has an endpoint like http://localhost:3000/api/CheckStatus
  const res = await fetch("http://localhost:3000/api/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      Email: email.value,
    }),
  });

  const json = await res.json();
  console.log(json);

  if (!res.ok) {
    statusMessage.value = "Gagal mendapatkan status pendaftaran.";
  } else {
    statusMessage.value = `Status pendaftaran untuk email ${email.value}: ${json.status}`;
  }
};
</script> -->

<style lang="scss" scoped>
.container-join {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  border: 2px white solid;
  box-shadow: 7px 5px 46px -16px #64b8ec;

  .join-form {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-content: space-around;

    .page-start {
      margin: 2rem 0 1rem 0;
      text-transform: uppercase;
      text-align: center;
    }

    .join-box {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    }

    .form-input {
    width: 100%; 
    padding: 0.4rem 1rem; 
    border-radius: 50px; 
    font-size: 1rem; 
    margin-bottom: 1.1rem; 
    border: 2px white solid;
    box-shadow: 7px 5px 46px -16px #64b8ec;
    }

      .form-button {
        padding: 1.2rem 2.8rem;
        margin: 0 0 2rem 0;
        border-radius: 10px; 
      }
    }
  }

@media all and (max-width: 576px) {
  .container-join {
    font-size: 0.8rem;
  }
}

@media all and (min-width: 576px) and (max-width: 768px) {
  .container-join {
    font-size: 0.8rem;
  }
}

@media all and (min-width: 768px) and (max-width: 992px) {
  .container-join {
    font-size: 1.1rem;
  }
}
</style>