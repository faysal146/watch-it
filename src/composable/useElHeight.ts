import { useElementBounding } from "@vueuse/core";
import { ref, watch } from "vue";

const el = ref(null);
const position = ref(0);
export default function useElHeight() {
	const { height } = useElementBounding(el);
	watch(el, e => {
		if (e) {
			const styles = window.getComputedStyle(e);
			const margins =
				parseInt(styles["marginBottom"].replace("px", "")) +
				parseInt(styles["marginTop"].replace("px", ""));
			position.value = height.value + margins + 10;
		}
	});
	return { el, height: position };
}
