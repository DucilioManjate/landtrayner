import * as Toast from "@radix-ui/react-toast";

export default function CustomToast({
  Provider,
  Root,
  Title,
  Description,
  Action,
  Close,
  ...props
}) {
  const constStyle = {
    Provider: Provider,
    Root: Root,
    Title: Title,
    Description: Description,
    Action: Action,
    Close: Close,
  };
  return (
    <Toast.Provider {...constStyle} {...props}>
      <Toast.Root>
        <Toast.Title />
        <Toast.Description />
        <Toast.Action />
        <Toast.Close />
      </Toast.Root>

      <Toast.Viewport />
    </Toast.Provider>
  );
}
