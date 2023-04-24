<template>
  <div class="h-screen flex flex-col">
    <!-- twitter logo -->
    <div
      class="p-2 my-2 hover:bg-blue-50 rounded-full w-min dark:hover:bg-white/20"
      :class="defaultTransition"
    >
      <NuxtLink to="/">
        <div class="w-8 h-8">
          <LogoTwiter />
        </div>
      </NuxtLink>
    </div>

    <div class="mt-2 space-y-3">
      <SidebarLeftTab active>
        <template v-slot:icon>
          <HomeIcon />
        </template>
        <template v-slot:name>Home</template>
      </SidebarLeftTab>
      <SidebarLeftTab>
        <template v-slot:icon>
          <HashtagIcon />
        </template>
        <template v-slot:name>Explore</template>
      </SidebarLeftTab>
      <SidebarLeftTab>
        <template v-slot:icon>
          <BellIcon />
        </template>
        <template v-slot:name>Notifications</template>
      </SidebarLeftTab>
      <SidebarLeftTab>
        <template v-slot:icon>
          <InboxIcon />
        </template>
        <template v-slot:name>Messages</template>
      </SidebarLeftTab>
      <SidebarLeftTab>
        <template v-slot:icon>
          <BookmarkIcon />
        </template>
        <template v-slot:name>Bookmarks</template>
      </SidebarLeftTab>
      <SidebarLeftTab>
        <template v-slot:icon>
          <DocumentTextIcon />
        </template>
        <template v-slot:name>Lists</template>
      </SidebarLeftTab>
      <SidebarLeftTab>
        <template v-slot:icon>
          <UserIcon />
        </template>
        <template v-slot:name>Profile</template>
      </SidebarLeftTab>
      <SidebarLeftTab>
        <template v-slot:icon>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28">
            <circle cx="14" cy="14" r="12" fill="none" stroke="currentColor" />
            <circle cx="7" cy="14" r="2" fill="currentColor" />
            <circle cx="14" cy="14" r="2" fill="currentColor" />
            <circle cx="21" cy="14" r="2" fill="currentColor" />
          </svg>
          <!-- <DotsHorizontalIcon /> -->
          <!-- <DotsCircleHorizontalIcon /> -->
        </template>
        <template v-slot:name>More</template>
      </SidebarLeftTab>
    </div>
  </div>
</template>

<script setup>
import { HomeIcon } from "@heroicons/vue/20/solid";
import {
  HashtagIcon,
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  DocumentTextIcon,
  UserIcon,
} from "@heroicons/vue/24/outline";

const { defaultTransition } = useTailwindConfig();
</script>

