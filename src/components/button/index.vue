<template>
    <div class="button-wrapper">
        <span>按钮</span>
    </div>
</template>
<script lang="ts">
@Component
export default class Button extends Vue{
    text: string = 'primary'
    size: string = 'small'
    type: string = 'block'
}
</script>
<style lang="less">

</style>
