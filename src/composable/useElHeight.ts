import { useElementBounding } from "@vueuse/core";
import { ref, watch } from "vue";

const el = ref(null);
const headerElePosition = ref(0);
export default function useElHeight() {
	const { height, y: position } = useElementBounding(el);
	// watch(top, console.log);
	watch(el, e => {
		if (e) {
			const styles = window.getComputedStyle(e);
			const margins =
				parseInt(styles["marginBottom"].replace("px", "")) +
				parseInt(styles["marginTop"].replace("px", ""));
			headerElePosition.value = height.value + margins;
		}
	});
	return { el, height: headerElePosition, position };
}
