<template>
  <div class="flex flex-col">
    <!-- Preview Card: What's happening -->
    <SidebarRightPreviewCard title="What's happening">
      <SidebarRightPreviewCardItem
        v-for="whatsHappening in whatsHappeningItems"
        :key="whatsHappening"
      >
        <div>
          <h2 class="font-bold text-gray-800 text-md dark:text-white">{{ whatsHappening.title }}</h2>

          <p class="text-gray-400 text-xs">{{ whatsHappening.count }}</p>
        </div>
      </SidebarRightPreviewCardItem>
    </SidebarRightPreviewCard>

    <!-- Who to follow Preview card -->
    <SidebarRightPreviewCard title="Who to Follow">
      <SidebarRightPreviewCardItem v-for="whoToFollow in whoToFollowItems" :key="whoToFollow">
        <div class="flex flex-row justify-between items-center p-2">
          <div class="flex">
            <img class="w-10 h-10 rounded-full" :src="whoToFollow.image" :alt="whoToFollow.name" />

            <div class="flex flex-col ml-2">
              <h1 class="text-sm font-bold text-gray-900 dark:text-white">{{ whoToFollow.name }}</h1>
              <p class="text-xs text-gray-400">{{ whoToFollow.handle }}</p>
            </div>
          </div>

          <div class="flex h-full">
            <button
              class="px-4 py-2 font-bold text-xs text-white dark:text-black bg-black dark:bg-white rounded-full"
            >Follow</button>
          </div>
        </div>
      </SidebarRightPreviewCardItem>
    </SidebarRightPreviewCard>
  </div>
</template>

<script setup>
const whatsHappeningItems = ref([
  {
    title: "SpaceX",
    count: "1.2M",
  },
  {
    title: "#codingisFun",
    count: "1.2k",
  },
  {
    title: "#100devs",
    count: "4.2k",
  },
  {
    title: "artForAll",
    count: "4.2k",
  },
]);
const whoToFollowItems = ref([
  {
    name: "Joe Biden",
    handle: "@JoeBiden",
    image: "https://picsum.photos/200/300",
  },
  {
    name: "Barack Obama",
    handle: "@BarackObama",
    image: "https://picsum.photos/200/300",
  },
  {
    name: "Jack Ma",
    handle: "@JackMa",
    image: "https://picsum.photos/200/300",
  },
]);
</script>

