import {
    Box,
    Collapse,
    Divider,
    Flex,
    Icon,
    IconButton,
    Image,
    Input,
    Popover,
    PopoverContent,
    PopoverTrigger,
    Stack,
    Text,
    useColorModeValue,
    useDisclosure,
  } from "@chakra-ui/react";
  import React, { useEffect, useState } from "react";
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronRightIcon,
  } from "@chakra-ui/icons";

  import logo from "../assets/logo.svg"
  import logo2 from "../assets/logo2.svg"
  import { IoSearchOutline } from "react-icons/io5";
  
  
  function Navbar() {
    const { isOpen, onToggle } = useDisclosure();
    const [isSticky,setIsSticky] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if(window.scrollY > 0){
          setIsSticky(true)
        }else{
          setIsSticky(false)
        }
      }

      window.addEventListener('scroll',handleScroll)

      return () => {
        window.removeEventListener('scroll',handleScroll)
      }
    },[])


    const background = isSticky ? "#f6eedf" : "!important";
    const backgroundMob = isSticky ? "#f6eedf" : "black";
    const color = isSticky ? "white" : "white";
    const commonLogo = isSticky ? logo2 : logo2
  
    return (
      <Box>
        <Flex
          bg={"#eaae00"}
          color={color}
          minH={{base:"10px",lg:"25px"}}
          px={{ base: 5, lg: "70px" }}
          py={{ base: "5px", lg: "5px" }}
          borderBottom={1}
          align={"center"}
          position="fixed" // Add sticky positioning
          top={"0"} // Stick to the top of the viewport
          zIndex="1000"
          as="nav"
          w={"100%"}
        >
          <Flex
            w={{base:"100%",lg:"1250px"}}
            m={"auto"}
            py={{ base: 2, lg: 1 }}
            justify={{ base: "start", md: "start" }}
            justifyContent={{base:"space-between",lg:"space-between"}}
           
          >
            
              <Box
                mt={"0px"}
                
                display={"flex"}
                alignItems={"center"}
              
              >
                <Image src={commonLogo} w={{base:"40px",lg:"70px"}} h={"100%"} objectFit={"contain"} />
                <Text display={{ base: "none", md: "none", lg: "none", xl: "flex" }} fontSize={"15px"} fontWeight={700}>Company Logo</Text>
              </Box>
            
  
            <Flex
              pl={"0px"}
              pr={"0px"}
            //   w={"100%"}
          
              display={{ base: "none", md: "none", lg: "none", xl: "flex" }}
            >
              <Box display={"flex"} alignItems={"center"}>
                <DesktopNav color={color} background={background} />
              </Box>
            </Flex>
  
            {/* yha pe lgana */}
            <Flex  alignItems={"center"} display={{ base: "none", md: "none", lg: "none", xl: "flex" }}>
                <Flex h={"40px"} boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}>
                    <Box w={"80%"} display={"flex"} alignItems={"center"} p={"10px"} color={"white"}>
                        <Input variant={"unstyled"} placeholder="Search" _placeholder={{ color: 'white' }} />
                    </Box>
                    <Box w={"20%"} bg={"#00bfcb"} color={"white"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
                        <IoSearchOutline/>
                    </Box>
                </Flex>
            </Flex>
            {/* yha pe lgana */}
          </Flex>
          <Flex
            alignItems={"center"}
            flex={{ base: 1, md: "auto" }}
            ml={{ base: -2 }}
            display={{ base: "flex", md: "flex", lg: "flex", xl: "none" }}
          >
            <IconButton
              color={color}
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={{ base: 4, lg: 6 }} h={{ base: 5, lg: 6 }} />
                ) : (
                  <HamburgerIcon
                    w={{ base: 5, lg: 10 }}
                    h={{ base: 5, lg: 10 }}
                  />
                )
              }
              variant={""}
              aria-label={"Toggle Navigation"}
            />
          </Flex>
        </Flex>
  
        <Collapse in={isOpen} animateOpacity>
          <MobileNav y={"10px"} opacity={""} backgroundMob={backgroundMob} color={color} />
        </Collapse>
      </Box>
    );
  }
  
  const DesktopNav = ({ color, background }) => {
    return (
      <Stack direction={"row"} spacing={5}>
        {NAV_ITEMS.map((navItem, index) => (
          <Box key={index}>
            <Popover trigger={"hover"} placement={"bottom-start"}>
              <PopoverTrigger>
                
                  <Box
                    display={"flex"}
                    alignItems={"center"}
                    as="a"
                    p={2}
                    fontSize={"15px"}
                    fontWeight={600}
                    letterSpacing={"1px"}
                    cursor={"pointer"}
                    color={color}
                    opacity={1}
                    _hover={{
                      textDecoration: "none",
                      color: "#8bc53f",
                    }}
                  >
                    <Text textTransform={"uppercase"}>
                    {navItem.label}
                    </Text>
                    
                  </Box>
                
              </PopoverTrigger>
  
              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={"xl"}
                  bg={background}
                  p={4}
                  rounded={"xl"}
                  minW={"sm"}
                >
                  <Stack>
                    {navItem.children.map((child, index) => (
                      <DesktopSubNav key={index} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </Stack>
    );
  };
  
  const DesktopSubNav = ({ label, href, subLabel }) => {
    return (
      <Box
        as="a"
        href={href}
        role={"group"}
        display={"block"}
        p={2}
        rounded={"md"}
        _hover={{ bg: useColorModeValue("#8bc53f", "gray.900") }}      
        >
        <Stack
          direction={"row"}
          align={"center"}
          _hover={{
            textDecoration: "none",
            color: "white",
          }}
        >
          <Box>
            
              <Text transition={"all .3s ease"} fontWeight={500}>
                {label}
              </Text>
            
            <Text fontSize={"sm"}>{subLabel}</Text>
          </Box>
          <Flex
            transition={"all .3s ease"}
            transform={"translateX(-10px)"}
            opacity={0}
            _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
            justify={"flex-end"}
            align={"center"}
            flex={1}
          >
            <Icon color={"white"} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Box>
    );
  };
  
  const MobileNav = ({ y, opacity,backgroundMob,color }) => {
    return (
      <Stack
        bg={backgroundMob}
        p={"20px 40px"}
        display={{ md: "flex", xl: "none" }}
        mt={{ base: "60px", md: "70px", lg: "110px" }}
        position="fixed" // Add sticky positioning
        top={y} // Stick to the top of the viewport
        zIndex="1000"
        as="nav"
        w={"100%"}
        opacity={opacity}
      >
        {NAV_ITEMS.map((navItem, index) => (
          <MobileNavItem key={index} {...navItem} color={color} />
        ))}
      </Stack>
    );
  };
  
  const MobileNavItem = ({ label, children, color }) => {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Stack spacing={0} onClick={children && onToggle}>
        <Box
          pl={{ lg: 10 }}
          py={2}
          as="a"
          justifyContent="space-between"
          alignItems="center"
          _hover={{
            textDecoration: "none",
          }}
        >
          <Flex gap={"10px"} alignItems={"center"}>
            
              <Text
                fontSize={{ lg: "30px" }}
                fontWeight={600}
                color={color}
              >
                {label}
              </Text>
              </Flex>
              <Divider/>
        </Box>
  
        
      </Stack>
    );
  };
  
  const NAV_ITEMS = [
    {
      label: "Home",
      href:"/about"
    },
    {
      label: "About",
      href: "/productPractices",
    },
    {
      label: "Service",
      href: "/contactUs",
    },
      {
        label: "Contact",
        href: "/contactUs",
      },
  ];
  
  export default Navbar;
  