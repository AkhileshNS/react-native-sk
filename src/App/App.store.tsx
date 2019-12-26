import { useImmer } from "use-immer";
import { createContainer } from "unstated-next";

interface $config {
  currRoute: string;
}

const useStore = () => {
  const [config, setConfig] = useImmer<$config>({
    currRoute: "/"
  });

  const setRoute = (route: string) =>
    setConfig(draft => {
      draft.currRoute = route;
    });

  return {
    config,
    setRoute
  };
};

export default createContainer(useStore);
