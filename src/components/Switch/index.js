import * as Switch from "@radix-ui/react-switch";

export default function CustomSwitch() {
  return (
    <div className="switch">
      <Switch.Root>
        <Switch.Thumb />
      </Switch.Root>
    </div>
  );
}
