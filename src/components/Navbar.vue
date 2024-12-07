<template>
  <nav class="navbar">
    <div class="logo">CHAIKINA ENTERTAINMENT</div>
    <div class="links" v-if="!isMenuOpen">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/services">Services</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>
    <button class="action-btn" v-if="!isMenuOpen">Action</button>
    <button class="burger-btn" @click="toggleMenu">&#9776;</button>

    <!-- Side menu -->
    <div class="side-menu-overlay" :class="{'open': isMenuOpen}" @click.self="closeMenu">
      <div class="side-menu" :class="{'open': isMenuOpen}">
        <button class="close-btn" @click="closeMenu">&times;</button>
        <div class="menu-links">
          <router-link to="/" @click="closeMenu">Home</router-link>
          <router-link to="/about" @click="closeMenu">About</router-link>
          <router-link to="/services" @click="closeMenu">Services</router-link>
          <router-link to="/contact" @click="closeMenu">Contact</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>


<script>
export default {
  data() {
    return {
      isMenuOpen: false, // Tracks whether the side menu is open or closed
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen; // Toggles the side menu
    },
    closeMenu() {
      this.isMenuOpen = false; // Closes the side menu
    },
  },
};
</script>

<style lang="scss">
.navbar {
  width: 100%;
  height: 128px;
  position: fixed;
  background-color: $black;
  color: $white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  // padding: 0.5rem 1rem;
  font-family: 'Libre Baskerville', serif;
  z-index: 1000;

  .logo {
    font-size: 1.5rem;
  }

  .links {
    display: flex;
    gap: 1rem;

    a {
      color: $white;
      text-decoration: none;
    }
  }

  .action-btn {
    background-color: $white;
    color: $black;
    border: none;
    padding: 0.5rem 1rem;
    margin: 0rem 3rem;
    cursor: pointer;
    font-size: 1rem;
  }

  .burger-btn {
    display: none;
    background: none;
    color: $white;
    border: none;
    font-size: 3rem;
    cursor: pointer;
    margin-right: 64px;
  }

  .side-menu-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1000;
    display: flex;
    justify-content: flex-end;
    opacity: 0; /* Initially hidden */
    visibility: hidden; /* Initially hidden */
    transition: opacity 0.3s ease, visibility 0s 0.3s; /* Fade in transition */
    
    &.open {
      opacity: 1; /* Make overlay visible */
      visibility: visible; /* Enable interaction */
      transition: opacity 0.3s ease, visibility 0s 0s; /* Fade in */
    }

    .side-menu {
      position: fixed;
      top: 0;
      right: -300px; /* Initially positioned off-screen */
      width: 300px;
      height: 100%;
      background-color: $black;
      color: $white;
      display: flex;
      flex-direction: column;
      padding: 1rem;
      transition: right 0.3s ease; /* Animate from the right */
      
      &.open {
        right: 0; /* Slide in from the right */
      }

      .close-btn {
        position: absolute;
        top: 10px;
        right: 10px;
        background: none;
        color: $white;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
      }

      .menu-links {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin-top: 3rem;

        a {
          color: $white;
          text-decoration: none;
          font-size: 1.2rem;
        }
      }
    }
  }
}

@media (max-width: 1200px) {
  .navbar {
    .logo {
      font-size: 1.2rem;
    }
    .links {
      gap: 0.8rem;
    }
    .action-btn {
      font-size: 0.9rem;
      padding: 1rem 2rem;
    }
  }
}

@media (max-width: 800px) {
  .navbar {
    .logo {
      font-size: 1rem;
    }
    .links {
      display: none;
    }
  }
}

@media (max-width: 500px) {
  .navbar {
    .burger-btn {
      display: block;
    }
    .links, .action-btn {
      display: none;
    }
  }
}

</style>
