import { HStack, Image, Text} from "@chakra-ui/react";
import logo from '../assets/game-hub-high-resolution-logo.png';
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({onSearch} : Props) => {
  return (
    <HStack padding='10px' >
        <Image src={logo} width={80} height={10} borderRadius='lg' objectFit="cover" />
        <SearchInput onSearch={onSearch} />
        <ColorModeSwitch />
    </HStack>
  )
};

export default NavBar;