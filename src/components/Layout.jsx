import { Tabs } from "antd";
import { useNavigate } from "react-router-dom";
import { Nacional, Tumbo } from "../views/";

export const Layout = () => {
  const navigate = useNavigate();

  const onChange = (key) => {
    navigate(`/${key}`);
  };

  const items = [
    {
      label: "Pokedex Nacional",
      key: "nacional",
      children: <Nacional />,
      forceRender: true,
    },
    {
      label: "Pokedex Tumbo",
      key: "tumbo",
      children: <Tumbo />,
      forceRender: true,
    },
  ];

  return (
    <Tabs
      defaultActiveKey="1"
      onChange={onChange}
      size="large"
      type="card"
      items={items}
    />
  );
};
