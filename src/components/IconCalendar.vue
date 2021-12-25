<template>
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    :width="size"
    :height="size"
    :fill="color"
  >
    <rect width="16" height="16" fill="url(#pattern0)" />
    <defs>
      <pattern
        id="pattern0"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use
          xlink:href="#image0_8_18"
          transform="translate(0 -0.015625) scale(0.03125)"
        />
      </pattern>
      <image
        id="image0_8_18"
        width="32"
        height="33"
        xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAhCAQAAAASL2HaAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfiAwoOOCiX8bOWAAAA8ElEQVRIx+2VTw7BUBCHv9afBVsShxHHEAcQcQaLLiyqV+AGIjiDOAzClkVbxkbrTUkpEpv+ZtHk9958b+a9ZAr/lvXgtGkBa6YJv0MTWDFLBzrILYbKH8a+kw7YIHi4CAfl7xFcPIRtOiBEKABnxGjPQjgDBYRQJxRv3yp96oBtrI2eHmHjAVsmnEx7Efd4r0BHVEEUC809ZgYcdQslA1YnfPK8FrV4t5ERbfQV4h0FlElc2kcyixpweTPLxk1aPqJgr44V/Ij1pXJADsgBPwIU4/lSopthHkCgreXDEH0Vcz0TK/RoZKh8x1j/F/6nK0D2d+Xdbd9cAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE4LTAzLTEwVDE0OjU2OjQwKzAwOjAwQn9tOgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOC0wMy0xMFQxNDo1Njo0MCswMDowMDMi1YYAAAAASUVORK5CYII="
      />
    </defs>
  </svg>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TheApp",
  props: {
    color: { type: String, default: "#000" },
    size: { type: String, default: "16" },
  },
});
</script>
