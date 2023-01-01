export const CenterDecorator = (Story) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "90vh",
      }}
    >
      {Story()}
    </div>
  );
};
