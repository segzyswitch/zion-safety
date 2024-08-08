<style>
body {
  background-color: #212529;
}
.main-wrapper {
  position: relative;
  min-height: 100vh;
}
.dropdown-menu {
  background-color: #32353a!important;
}
.dropdown-menu li a {
  color: #FEFEFE;
  cursor: pointer;
}
.chat-body {
  padding: 40px 0 110px 0;
}
.chat-input {
  width: 100%;
  border: none;
}
.chat-footer-wrapper {
  position: fixed;
  bottom: 0;
}
.chat-footer {
  background-color: #32353a;
  border-radius: 30px;
  overflow: hidden;
}
.chat-footer input {
  background-color: transparent!important;
  padding: 10px 20px;
  color: #FEFEFE!important;
  height: 50px;
}
.chat-footer input:focus {
  box-shadow: none!important;
}
.chat-footer button {
  width: 40px;
  aspect-ratio: 1;
  border-radius: 50%;
  background-color: #CCC;
  margin-right: 10px;
  padding: 0;
}
.message-box {
  border-radius: 10px;
  padding: 7.5px 10px;
  background-color: #32353a;
  color: #FEFEFE;
}
</style>
<template>
  <div class="container-fluid main-wrapper col-sm-7 col-md-5">
    <div class="d-flex chat-header py-3 text-light sticky-top bg-dark">
      <routerLink to="/" class="btn p-0 my-auto text-light">
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-arrow-left-short" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"/>
        </svg>
      </routerLink>
      <!-- <h2 class="m-auto"><span class="ps-2">AI Assistance</span></h2> -->
      <p class="m-auto">
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-robot" viewBox="0 0 16 16">
          <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5M3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.6 26.6 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.93.93 0 0 1-.765.935c-.845.147-2.34.346-4.235.346s-3.39-.2-4.235-.346A.93.93 0 0 1 3 9.219zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a25 25 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25 25 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135"></path>
          <path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2zM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5"></path>
        </svg>
        <b class="ps-2">ZION SAFETY EQUIPMENT</b>
      </p>
      <div class="dropdown ms-auto my-auto">
        <button class="btn p-0 text-light" data-bs-toggle="dropdown">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
          </svg>
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" @click="clearChat">Clear chat</a></li>
          <li><routerLink to="/" class="dropdown-item">Back home</routerLink></li>
        </ul>
      </div>
    </div>
    <div class="w-100 chat-body text-light">
      <div class="w-100 text-center py-5 px-3 text-secondary"
        v-if="Chats.length<1"
        style="height:65vh;display:flex;">
        <div class="w-100 my-auto">
          <h4>Welcome to Zion Safety Equipment</h4>
          <p>Start typing to send a request</p>
        </div>
      </div>
      <div class="w-100" v-for="(message, idx) in Chats" :key="idx">
        <!-- User message -->
        <div v-if="message.role=='user'" class="w-100 message-item user d-flex mb-3">
          <div class="ms-auto message-box col-sm-8">{{ message.content }}</div>
        </div>
        <!-- AI response -->
        <div v-if="message.role=='assistant'" class="w-100 message-item response d-flex mb-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-robot mt-2" viewBox="0 0 16 16">
            <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5M3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.6 26.6 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.93.93 0 0 1-.765.935c-.845.147-2.34.346-4.235.346s-3.39-.2-4.235-.346A.93.93 0 0 1 3 9.219zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a25 25 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25 25 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135"></path>
            <path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2zM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5"></path>
          </svg>
          <div class="col-10 p-0 ps-2" v-html="message.content.replace(/\n/g, '<br>')"></div>
        </div>
      </div>
      <div class="w-100 text-center p-3" v-if="loadReq">
        <i class="spinner-grow spinner-grow-sm text-secondary"></i>
        <i class="spinner-grow spinner-grow-sm text-secondary" style="animation-delay:.2s;"></i>
        <i class="spinner-grow spinner-grow-sm text-secondary" style="animation-delay:.4s;"></i>
      </div>
    </div>
    <div class="p-2 chat-footer-wrapper col-sm-7 col-md-5 bg-dark">
      <form class="chat-footer w-100 d-flex mb-2" @submit.prevent="sendMessage">
        <input type="text"
          v-model="userMessage"
          :disabled="loadReq"
          required class="form-control chat-input pe-2"
          placeholder="Ask AI"
        />
        <button type="submit" :disabled="!userMessage || loadReq" class="btn chat-btn my-auto text-dark">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
            <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"/>
          </svg>
        </button>
      </form>
      <p class="text-center mb-1"><small class="text-secondary">AI can make mistakes. Check important info.</small></p>
    </div>
  </div>
</template>

<script>
import { getChatResponse } from '../chatgpt';
// import { useRuntimeConfig } from '#imports'
export default {
  data() {
    return {
      Chats: [],
      userMessage: '',
      chatResponse: '',
      loadReq: false,
    };
  },
  methods: {
    async sendMessage() {
      this.loadReq = true;
      this.Chats.push({
        role: 'user',
        content: this.userMessage
      });
      try {
        const response = await getChatResponse(this.userMessage);
        this.userMessage = '';
        this.Chats.push(response.choices[0].message);
        this.loadReq = false;
        localStorage.setItem('Chats', JSON.stringify(this.Chats));
        // console.log(response);
      } catch (err) {
        console.log(err)
        this.loadReq = false;
      }
    },
    scrollToBottom() {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
      });
    },
    clearChat() {
      localStorage.removeItem('Chats');
      this.Chats = [];
    }
  },
  mounted() {
    this.scrollToBottom();
    const savedChats = localStorage.getItem('Chats');
    if (savedChats) {
      this.Chats = JSON.parse(savedChats);
      console.log(this.Chats)
    }
  }
};
</script>