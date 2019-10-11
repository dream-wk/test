<template>
<div>
    <header>
    <h2>This is Header.</h2>
</header>
<section>
    <article>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </article>
</section>
</div>
</template>

<style lang="less">
@min-font-size: 1.6rem;
@max-font-size: 3rem;
@min-screen: 600px;
@max-screen: 1200px;

:root {
  font-size: 10px;
}

article {
  font-size: @min-font-size;
}
@media (min-width: @max-screen) {
    article {
        font-size: @max-font-size;
    }
}
 
@media (max-width: @min-screen) {
    article {
        font-size: @min-font-size;
    }
}
@media (min-width: @min-screen) and (max-width: @max-screen) {
    article {
        font-size: calc(@min-font-size + (3- 1.6) * ((100vw - @min-screen) / (1200 - 600)));
    }
}

</style>
