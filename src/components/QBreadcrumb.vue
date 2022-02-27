<script setup lang="ts">
const props = defineProps({
    url: { type: String, required: true },
    titles: { type: Array as PropType<string[]>, required: true }
})

const breadcrumbs = computed<{ url: string; title: string }[]>(() => {
    const urls = props.url.split("/");
    urls.shift()

    const urlsFormatted = urls.map((url: string, i: number) => {
        if (i === 0) {
            return `/${url}`;
        } else if (i === 1) {
            return `/${urls[i - 1]}/${url}`;
        } else if (i === 2) {
            return `/${urls[i - 2]}/${urls[i - 1]}/${url}`;
        } else {
            return `/${urls[i - 3]}/${urls[i - 2]}/${urls[i - 1]}/${url}`;
        }
    });

    const titles = props.titles;

    const breadcrumbs = urlsFormatted.map(function (url: string, i: number) {
        return { url: url, title: titles[i] };
    });

    return breadcrumbs;
});
</script>

<template>
    <ul flex flex-wrap text-sm>
        <li v-for="(item, index) in breadcrumbs" :key="`item${index}`">
            <NuxtLink
                v-if="index < breadcrumbs.length - 1"
                :to="item.url"
                :itemid="item.url"
            >{{ item.title }}</NuxtLink>

            <span v-if="index < breadcrumbs.length - 1" text-xs mx-1>/</span>
            <span v-else>{{ item.title }}</span>
        </li>
    </ul>
</template>