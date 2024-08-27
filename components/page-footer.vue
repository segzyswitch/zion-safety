<style>
.chat-box {
  position: fixed;
  transition: all .4s;
  right: 10px;
  bottom: 100px;
  z-index: 9999;
  height: 400px;
  width: 320px;
  transform: scale(0);
}
.chat-inner {
  width: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #212529;
  border-radius: 10px;
}
.chat-box.open {
  transform: scale(1);
}
.chat-box.expanded {
  width: 100vw;
  height: 100vh;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.4);
  padding: 25px;
}
.chat-box.expanded .chat-inner {
  width: 95%;
  max-width: 800px;
  margin: auto;
}
.box-header {
  padding: 15px;
}
.box-body {
  padding: 15px;
  height: 100%;
  overflow: auto;
}

.chat-form {
  background-color: #32353a;
  border-radius: 30px;
  overflow: hidden;
}
.chat-form input {
  background-color: transparent!important;
  padding: 10px 20px;
  color: #FEFEFE!important;
  height: 50px;
  border: 0;
}
.chat-form input:focus {
  box-shadow: none!important;
}
.chat-form button {
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
  <div>
    <footer class="w-100 py-5">
      <div class="container mb-0 py-4">
        <div class="row">
          <div class="col-sm-6">
            <h4 class="text-white">ZION SAFETY EQUIPMENTS</h4>
            <p class="text-light mb-0">Is known for one of the best when it comes to safety equipment Very affordable and reliable equipment not just that best quality also in quantity, well packaged and fast There customers service treat in appropriate manner and well approach</p>
          </div>
        </div>
      </div>
    </footer>
    
    <!-- Chat  -->
    <div class="open-chat-btn">
      <button class="btn p-0 shadow-none" @click="openChat=!openChat">
        <svg height="50px" width="50px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 56 56" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path style="fill:#52C306;" d="M0,16.207c0-8.822,7.178-16,16-16h24c8.822,0,16,7.178,16,16v14c0,8.485-6.644,15.429-15,15.949 v-3.949c0-0.553-0.448-1-1-1s-1,0.447-1,1v4v1v8.586l-1.359-1.359c-5.306-5.305-12.359-8.227-19.86-8.227H16 c-8.822,0-16-7.178-16-16L0,16.207z"></path> <circle style="fill:#FFFFFF;" cx="15" cy="23.207" r="3"></circle> <circle style="fill:#FFFFFF;" cx="28" cy="23.207" r="3"></circle> <circle style="fill:#FFFFFF;" cx="41" cy="23.207" r="3"></circle> </g> </g></svg>
      </button>
    </div>

    <div class="chat-box shadow text-light" :class="{'open':openChat, 'expanded':expandChat}">
      <div class="chat-inner">
        <div class="box-header d-flex">
          <h5 class="my-auto text-uppercase w-100">AI Assistance</h5>
          <button class="btn text-white p-1 ms-auto my-auto"
            v-if="!expandChat"
            @click="expandChat=!expandChat" title="Expand">
            <i class="bi bi-fullscreen"></i>
          </button>
          <button class="btn text-white p-1 ms-auto my-auto btn-lg"
            v-if="expandChat"
            @click="expandChat=!expandChat" title="Close">
            <i class="bi bi-fullscreen-exit"></i>
          </button>
          <button class="btn text-white p-1 ms-auto my-auto btn-lg" @click="openChat=!openChat" title="Close">
            <i class="bi bi-x"></i>
          </button>
        </div>
        <div class="box-body mb-0">
          <div class="w-100 h-100 text-center py-5 px-3 text-secondary"
            v-if="Chats.length<1"
            style="display:flex;">
            <div class="w-100 my-auto">
              <p>Start typing to send a request</p>
            </div>
          </div>
          <div class="w-100" v-for="(message, idx) in Chats" :key="idx">
            <!-- User message -->
            <div v-if="message.role=='user'" class="w-100 message-item user d-flex mb-3">
              <div class="ms-auto message-box" style="max-width:70%;">{{ message.content }}</div>
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
        <div class="box-footer px-2 py-1 mt-auto">
          <form class="chat-form w-100 d-flex mb-2" @submit.prevent="sendMessage">
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getChatResponse } from '../chatgpt';
export default {
  data() {
    return {
      Chats: [],
      userMessage: '',
      chatResponse: '',
      loadReq: false,
      openChat: false,
      expandChat: false,
    }
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
  },
  mounted() {
    // this.scrollToBottom();
    const savedChats = localStorage.getItem('Chats');
    if (savedChats) {
      this.Chats = JSON.parse(savedChats);
      // console.log(this.Chats)
    }
  }
}
</script>