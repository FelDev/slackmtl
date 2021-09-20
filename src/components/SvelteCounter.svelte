<script>
    let count = 0;

    function add() {
        count += 1;
    }

    function subtract() {
        count -= 1;
    }
</script>

<div id="svelte" class="counter">
    <button on:click={() => (count -= 1)}>-</button>
    <pre>{ count }</pre>
    <button on:click={add}>+</button>
</div>
