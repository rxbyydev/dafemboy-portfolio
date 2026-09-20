<template>
    <div class="email-link">
        <a href="mailto:uwu@dafemboy.dev">uwu@dafemboy.dev</a>
    </div>
</template>
<script>
</script>
<style lang="scss">
.email-link {
    position: fixed;
    font-size: 1rem;
    right: calc(0vw - 1rem);
    bottom: -25rem;
    rotate: 90deg;
    transform: translateX(-100%);
    transition: 0.15s;

    animation-name: emailpopup;
    animation-delay: 3000ms;
    animation-duration: 1s;
    animation-fill-mode: forwards;
}

@keyframes emailpopup {
    from {
        bottom: -25rem;
        opacity: 0;
    }

    to {
        bottom: 0rem;
        opacity: 1;
    }
}

.email-link a {
    padding: 0.5rem;
    color: var(--primarytextcolor);
}

.email-link:hover {
    transform: translateX(calc(-100% - 2rem));    
}

.email-link::after {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateX(calc(100% + 0.5rem));

    width: 10rem;
    height: 1px;
    background-color: rgb(255, 110, 180);
}

@media screen and (max-width: 1200px) {
  /*Tablets*/
  .email-link {
    display: none;
  }
}
</style>