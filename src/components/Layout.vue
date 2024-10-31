
<template>
  
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>POSCAR Digital</title>
    <link rel="shortcut icon" href="/public/image/p.png" type="image/x-icon">
    
  </head>
 
  <div class="flex flex-col min-h-screen">
    <header
      id="header"
      class="bg-gray-800 text-white p-2 flex justify-between shadow-lg items-center sticky top-0 transition duration-300 shadow-neutral-800"
    >
      <nav class="flex items-center justify-between max-w-6xl mx-auto w-full">
        <a href="/" class="flex items-center space-x-2">
          <span class="text-xl font-bold">Poscar</span>
        </a>

        <div class="flex-grow flex justify-center space-x-4 relative">
          <a
            href="/"
            :class="
              isActive('/')
                ? 'bg-gray-600 text-yellow-500 font-semibold'
                : 'hover:bg-gray-600 transition-all'
            "
            class="px-2 rounded"
          >
            Home
          </a>
          <div
            class="relative"
            @mouseenter="showDropdown = true"
            @mouseleave="showDropdown = false"
          >
            <a
              href="/product"
              :class="
                isActive('/product')
                  ? 'bg-gray-600 text-yellow-500 font-semibold'
                  : 'hover:bg-gray-600 transition-all'
              "
              class="px-2 py-1 rounded"
            >
              Products & Services
            </a>
            <transition name="fade">
              <div
                v-if="showDropdown"
                class="absolute left-0 mt-2 w-48 bg-gray-700 rounded shadow-lg z-50 transition-opacity duration-300"
              >
                <a
                  href="/product/#blog1"
                  class="block px-2 py-2 hover:bg-gray-600"
                  >Education</a
                >
                <a
                  href="/product/category2"
                  class="block px-2 py-2 hover:bg-gray-600"
                  >Enterprise</a
                >
                <a
                  href="/product/category3"
                  class="block px-2 py-2 hover:bg-gray-600"
                  >Custom Solution</a
                >
                <a
                  href="/product/category4"
                  class="block px-2 py-2 hover:bg-gray-600"
                  >Outsourcing</a
                >
              </div>
            </transition>
          </div>
          <a
            href="/about"
            :class="
              isActive('/about')
                ? 'bg-gray-600 text-yellow-500 font-semibold'
                : 'hover:bg-gray-600 transition-all'
            "
            class="px-2 rounded"
          >
            About Us
          </a>
          <a
            href="/legal"
            :class="
              isActive('/legal')
                ? 'bg-gray-600 text-yellow-500 font-semibold'
                : 'hover:bg-gray-600 transition-all'
            "
            class="px-2 rounded"
          >
            Legal
          </a>
          <a
            href="/blog"
            :class="
              isActive('/blog')
                ? 'bg-gray-600 text-yellow-500 font-semibold'
                : 'hover:bg-gray-600 transition-all'
            "
            class="px-2 rounded"
          >
            Blogs
          </a>
          <a
            href="/contact"
            :class="
              isActive('/contact')
                ? 'bg-gray-600 text-yellow-500 font-semibold'
                : 'hover:bg-gray-600 transition-all'
            "
            class="px-2 rounded"
          >
            Contact Us
          </a>
        </div>

        <div class="flex items-center space-x-2">
          <select
            id="language"
            class="bg-gray-700 text-white px-2 py-1 hover:bg-gray-600 rounded "
          >
            <option value="en">English</option>
            <option value="kh">Khmer</option>
          </select>
        </div>
      </nav>
    </header>
    <main class="flex-grow p-4 bg-gray-200">
      <slot />
      <div class="mt-4 text-center">
        <p class="text-lg">{{ message }}</p>
        <button
          @click="toggleMessage"
          class="mt-2 bg-gray-600 text-white px-2 py-2 rounded hover:bg-yellow-500 transition"
        >
          Toggle Message
        </button>
      </div>
    </main>
    <footer class="bg-gray-900 text-white py-6">
      <div class="max-w-6xl mx-auto flex flex-col items-center">
        <!-- Logo Section -->
        <div class="mb-4">
          <span class="text-2xl fonst-bold">LOGO</span>
          <p class="text-sm">Slogan Company</p>
        </div>

        <!-- Navigation Links Section -->
        <div class="flex justify-center space-x-8 mb-4">
          <a href="#" class="font-semibold hover:text-blue-500"
            >Weebly Themes</a
          >
          <a href="#" class="font-semibold hover:text-blue-500"
            >Pre-Sale FAQs</a
          >
          <a href="#" class="font-semibold hover:text-blue-500"
            >Submit a Ticket</a
          >
          <a href="#" class="font-semibold hover:text-blue-500">Services</a>
          <a href="#" class="font-semibold hover:text-blue-500">Showcase</a>
          <a href="#" class="font-semibold hover:text-blue-500">Support</a>
          <a href="#" class="font-semibold hover:text-blue-500">Resources</a>
        </div>

        <!-- Social Media Icons Section -->
        <div class="flex space-x-4 mb-4">
          <a href="#" class="hover:text-blue-400">Facebook</a>
          <a href="#" class="hover:text-blue-400">Twitter</a>
          <a href="#" class="hover:text-blue-400">Instagram</a>
          <a href="#" class="hover:text-blue-400">LinkedIn</a>
        </div>

        <!-- Copyright Notice -->
        <p class="text-sm">© 2024 Copyright. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>

import { ref, onMounted } from "vue";

const message = ref("How are you?");
const showDropdown = ref(false); // State to control dropdown visibility

const toggleMessage = () => {
  message.value = message.value === "How are you?" ? "Goodbye" : "How are you?";
};

// Computed property to get the current path
const currentPath = window.location.pathname;

const isActive = (path) => {
  return currentPath === path;
};

onMounted(() => {
  window.addEventListener("scroll", () => {
    const header = document.getElementById("header");
    if (window.scrollY > 0) {
      header.classList.add("bg-opacity-90", "shadow-md", "z-10");
    } else {
      header.classList.remove("bg-opacity-90", "shadow-md", "z-10");
    }
  });
});
</script>

<style scoped>
/* Optional: Add specific styles for active link appearance */
</style>
