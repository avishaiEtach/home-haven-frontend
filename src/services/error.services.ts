import { enqueueSnackbar } from "notistack";
import EventEmitter from "events";
const eventBus = new EventEmitter();

export const eventBusServices = {
  eventBus,
};

eventBus.on("error", (message: string) => {
  enqueueSnackbar(message, {
    variant: "error",
    anchorOrigin: { horizontal: "center", vertical: "top" },
  });
});
