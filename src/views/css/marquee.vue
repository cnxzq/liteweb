<template>
	<div>
		<div class="marquee">
			<span> 
				<span class="px-2" v-for="i in 20">{{i}}</span>
			</span>
		</div>
		<div class="marquee">
			<span> 内容过长的的时</span>
		</div>
		<h3>内容过长的的时候会自动跑动</h3>
	</div>
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
		animation: marquee 3s linear infinite both normal;
	}
}

@keyframes marquee {
	0% {
		transform: translateX(0);
	}
	100% {
		transform: translateX(min(100cqw - 100%, 0px));
	}
	/* to {
		transform: translateX(min(100cqw - 100%, 0px));
	} */
}
</style>