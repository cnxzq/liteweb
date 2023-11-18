<template>
    <div class="marquee">
        <span> 内容过长的的时候会自动跑动，内容过长的的时候会自动跑动，内容过长的的时候会自动跑动 </span>
    </div>
    <h3>内容过长的的时候会自动跑动</h3>
</template>

<style scoped>
.marquee {
	display: flex;
	position: relative;
	overflow: hidden;
	white-space: nowrap;
	width: 200px;
	padding: 2px 4px;
	background-color: salmon;
	resize: horizontal;
	container-type: inline-size;
	
	> * {
		animation: marquee 3s linear infinite both alternate;
	}
}

@keyframes marquee {
	to {
		transform: translateX(min(100cqw - 100%, 0px));
	}
}
</style>