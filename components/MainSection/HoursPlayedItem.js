
import { GridItem, Box, Text, Flex , useToken} from '@chakra-ui/react';

import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), {
    ssr: false
  });

 


export const HoursPlayedItem = (props) =>{ 

  const [lightGray, darkerGray] = useToken(
    // the key within the theme, in this case `theme.colors`
    'colors',
    // the subkey(s), resolving to `theme.colors.red.100`
    ['whiteAlpha.300', 'gray.600'],
    // a single fallback or fallback array matching the length of the previous arg
  )

  
const options = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: lightGray
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  }, 
  tooltip: {
    enabled: false, 
  }, 
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: lightGray
    },
    axisTicks: {
      color: darkerGray
    },
    categories: [
      '2021-05-18T00:00:00.000z',
      '2021-05-19T00:00:00.000z',
      '2021-05-20T00:00:00.000z',
      '2021-05-21T00:00:00.000z',
    ]
  },
  fill: { 
    opacity: 1,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.8,
      opacityTo: 0.0,
    }
  }
}

const series = [
  {
    name: 'hours', 
    data: [2, 5, 3, 6],
    color: "#0df775"
  }
]

    return (
        <GridItem 
            rowSpan={3} 
            colSpan={4} 
            bg='gray.700' 
            borderRadius={16}
            p={4}>
                
               <Flex> 
                <Flex flexDir={"column"}> 
            <Text fontWeight={"bold"}>
                Total hours played
            </Text> 
            <Text fontWeight={"bold"} 
            color={"#8ce196"}
            fontSize={36}>
                560h
            </Text>   
            </Flex>
            <Box w={"80%"} > 
            <Chart
              options={options}
              series={series} 
              type='area'   
              height={145} 
            />
            </Box>
            </Flex>
            
            </GridItem>
    )
}