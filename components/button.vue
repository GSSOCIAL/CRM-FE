<template>
  <div
    class="buttonContainer"
    :class="{
      [type]: true,
      [size]: true,
      disabled: disabled,
    }"
    @click.stop="handleClick"
  >
    <div class="buttonIconContainer" v-if="icon && icon.trim().length > 0">
      <Icon :icon="icon" />
    </div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  type: {
    type: String,
    required: false,
    default: "secondary",
  },
  size: {
    type: String,
    required: false,
    default: "default",
  },
  disabled: {
    type: Boolean,
    required: false,
    default: false,
  },
  icon: {
    type: String,
    required: false,
    default: "",
  },
});

function handleClick() {}
</script>

<style lang="scss">
@import "assets/style/mixins.scss";

.buttonContainer {
  cursor: default;
  border-radius: 4px;
  padding: 10px 14px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  @include label;
  text-decoration: none;

  > .buttonIconContainer {
    max-height: 24px;
    margin-right: 5px;
    svg {
      height: 100%;
    }
  }
  &.default {
    padding: 10px 14px;
    height: 36px;
  }
  &.small {
    padding: 6px 8px;
    height: 32px;
    > .buttonIconContainer {
      max-height: 20px;
      max-width: 20px;
    }
  }
  &.disabled {
    background-color: var(--buttonDisabledColor);
    color: var(--buttonDisabledText);
    cursor: default;

    .buttonIconContainer svg {
      fill: var(--buttonDisabledText);
      stroke: var(--buttonDisabledText);
    }
  }
  &.primary {
    background-color: var(--buttonPrimaryColor);
    color: var(--buttonPrimaryText);

    .buttonIconContainer svg {
      fill: var(--buttonPrimaryText);
      stroke: var(--buttonPrimaryText);
    }

    &:hover {
      background-color: var(
        --buttonPrimaryHoverColor,
        var(--buttonPrimaryColor)
      );
      color: var(--buttonPrimaryHoverText, var(--buttonPrimaryText));

      .buttonIconContainer svg {
        fill: var(--buttonPrimaryHoverText, var(--buttonPrimaryText));
        stroke: var(--buttonPrimaryHoverText, var(--buttonPrimaryText));
      }
    }

    &.disabled {
      background-color: var(
        --buttonPrimaryDisabledFill,
        var(--buttonDisabledFill)
      );
      color: var(--buttonPrimaryDisabledText, var(--buttonDisabledText));

      .buttonIconContainer svg {
        fill: var(--buttonPrimaryDisabledText, var(--buttonDisabledText));
        stroke: var(--buttonPrimaryDisabledText, var(--buttonDisabledText));
      }
    }
  }
  &.secondary {
    background-color: var(--buttonSecondaryColor);
    color: var(--buttonSecondaryText);
    .buttonIconContainer svg {
      fill: var(--buttonSecondaryText);
      stroke: var(--buttonSecondaryText);
    }

    &:hover {
      background-color: var(
        --buttonSecondaryHoverColor,
        var(--buttonSecondaryColor)
      );
      color: var(--buttonSecondaryHoverText, var(--buttonSecondaryText));

      .buttonIconContainer svg {
        fill: var(--buttonSecondaryHoverText, var(--buttonSecondaryText));
        stroke: var(--buttonSecondaryHoverText, var(--buttonSecondaryText));
      }
    }
    &.disabled {
      background-color: var(
        --buttonSecondaryDisabledFill,
        var(--buttonDisabledFill)
      );
      color: var(--buttonSecondaryDisabledText, var(--buttonDisabledText));

      .buttonIconContainer svg {
        fill: var(--buttonSecondaryDisabledText, var(--buttonDisabledText));
        stroke: var(--buttonSecondaryDisabledText, var(--buttonDisabledText));
      }
    }
  }
  &.danger {
    background-color: var(--buttonDangerColor);
    color: var(--buttonDangerText);

    .buttonIconContainer svg {
      fill: var(--buttonDangerText);
      stroke: var(--buttonDangerText);
    }

    &:hover {
      background-color: var(--buttonDangerHoverColor, var(--buttonDangerColor));
      color: var(--buttonDangerHoverText, var(--buttonDangerText));

      .buttonIconContainer svg {
        fill: var(--buttonDangerHoverText, var(--buttonDangerText));
        stroke: var(--buttonDangerHoverText, var(--buttonDangerText));
      }
    }

    &.disabled {
      background-color: var(
        --buttonDangerDisabledFill,
        var(--buttonDisabledFill)
      );
      color: var(--buttonDangerDisabledText, var(--buttonDisabledText));

      .buttonIconContainer svg {
        fill: var(--buttonDangerDisabledText, var(--buttonDisabledText));
        stroke: var(--buttonDangerDisabledText, var(--buttonDisabledText));
      }
    }
  }
  &.active {
    background-color: var(--buttonActiveColor);
    color: var(--buttonActiveText);

    .buttonIconContainer svg {
      fill: var(--buttonActiveText);
      stroke: var(--buttonActiveText);
    }

    &:hover {
      background-color: var(--buttonActiveHoverColor, var(--buttonActiveColor));
      color: var(--buttonActiveHoverText, var(--buttonActiveText));

      .buttonIconContainer svg {
        fill: var(--buttonActiveHoverText, var(--buttonActiveText));
        stroke: var(--buttonActiveHoverText, var(--buttonActiveText));
      }
    }
    &.disabled {
      background-color: var(
        --buttonActiveDisabledFill,
        var(--buttonDisabledFill)
      );
      color: var(--buttonActiveDisabledText, var(--buttonDisabledText));

      .buttonIconContainer svg {
        fill: var(--buttonActiveDisabledText, var(--buttonDisabledText));
        stroke: var(--buttonActiveDisabledText, var(--buttonDisabledText));
      }
    }
  }

  &.clean {
    background-color: var(--buttonCleanColor);
    color: var(--buttonCleanText);

    .buttonIconContainer svg {
      fill: var(--buttonCleanText);
      stroke: var(--buttonCleanText);
    }

    &:hover {
      background-color: var(--buttonCleanHoverColor, var(--buttonCleanColor));
      color: var(--buttonCleanHoverText, var(--buttonCleanText));

      .buttonIconContainer svg {
        fill: var(--buttonCleanHoverText, var(--buttonCleanText));
        stroke: var(--buttonCleanHoverText, var(--buttonCleanText));
      }
    }
    &.disabled {
      background-color: var(
        --buttonCleanDisabledFill,
        var(--buttonDisabledFill)
      );
      color: var(--buttonCleanDisabledText, var(--buttonDisabledText));

      .buttonIconContainer svg {
        fill: var(--buttonCleanDisabledText, var(--buttonDisabledText));
        stroke: var(--buttonCleanDisabledText, var(--buttonDisabledText));
      }
    }
  }
  &.scheduled {
    color: var(--statusTextScheduled);
    .buttonIconContainer svg {
      fill: var(--buttonCleanText);
      stroke: var(--buttonCleanText);
    }
    &:hover {
      background-color: #e4eefe;
    }
  }
  &:not(.disabled) {
    cursor: pointer;
  }
}
</style>
