<style>
    html {
        height: 200px;
        width: 200px;
    }
</style>

<template>
    <h1>
        Popup
        <button
            @click="openTabPage">
            open tab page
        </button>
    </h1>
</template>

<script lang="ts" setup>

const openTabPage = () => {
    chrome.tabs.create({
		url: chrome.runtime.getURL('src/bootstrap/index.html')
	});
};
</script>