<template>
  <div class="flex flex-col min-h-screen">
    <header class="bg-gray-800 text-white p-4">
      <nav class="flex justify-center space-x-4">
        <a href="/" class="hover:underline">Home</a>
        <a href="/about" class="hover:underline">About</a>
      </nav>
    </header>
    <main class="flex-grow p-4">
      <slot />
      <input 
        type="text" 
        v-model="message" 
        class="mt-2 p-2 border border-gray-300 rounded" 
        placeholder="Type something..." 
      />
      <p class="mt-2 text-green-500">{{ message }}</p>
      <button 
        @click="toggleMessage" 
        class="mt-4 p-2 bg-blue-500 text-white rounded"
      >
        Toggle Message
      </button>
    </main>
    <footer class="bg-gray-800 text-white text-center p-4">
      <p>© 2024 My Website</p>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const message = ref('Hello');

const toggleMessage = () => {
  message.value = message.value === 'Hello' ? 'Goodbye' : 'Hello';
};
</script>

<style scoped>
/* You can keep this empty, as we're using Tailwind CSS */
</style>