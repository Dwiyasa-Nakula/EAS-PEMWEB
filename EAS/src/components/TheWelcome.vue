<template>
  <div class="container-join">
    <form class="join-form" @submit.prevent="loginUser">
      <h2 class="page-start">Pendaftaran</h2>
      <div class="join-box">
        <input class="form-input input" type="text" v-model="nama" placeholder="nama" required />
        <input class="form-input input" type="email" v-model="Email" placeholder="Email" required />
        <input class="form-input input" type="text" v-model="Asal_Sekolah" placeholder="Asal Sekolah" required />
      </div>
      <button class="btn form-button" style="text-align: center;" type="submit">Daftar</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const nama = ref("");
const Email = ref("");
const Asal_Sekolah = ref("");

const loginUser = async () => {
  const res = await fetch("http://localhost:3000/api/Form", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: nama.value,
      Email: Email.value,
      Asal_Sekolah: Asal_Sekolah.value,
      Status: "Waiting",
      Tanggal_Pendaftaran: new Date().toISOString(),
    }),
  });

  const json = await res.json();
  console.log(json);
  if (!res.ok) {
    console.log("Nama " + nama.value + " gagal Mendaftar");
  } else {
    console.log("Nama " + nama.value + " telah berhasil Mendaftar");
    router.push("/CekDaftar");
  }
};
</script>

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
