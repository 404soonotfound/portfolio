import { onMounted, onUnmounted, ref } from "vue";

export function useMediaQuery(query: string) {
  const matches = ref(false);

  const updateMatches = () => {
    matches.value = window.matchMedia(query).matches;
  };

  onMounted(() => {
    updateMatches();
    window.addEventListener("resize", updateMatches);
  });

  onUnmounted(() => {
    window.removeEventListener("resize", updateMatches);
  });

  return matches;
}
