export default (ref, type, message, title) => {
    ref.current.addNotification({
        message,
        type,
        title,
        insert: "top",
        container: "top-right",
        animationIn: ["animated", "fadeIn"],
        animationOut: ["animated", "fadeOut"],
        dismiss: { duration: 2000 },
        dismissable: { click: true }
      });
};
