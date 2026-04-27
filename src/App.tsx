import { Accordion, AccordionDetails, AccordionSummary, Box, Typography, useMediaQuery } from '@mui/material';
import { purple } from '@mui/material/colors';
import { useState } from 'react';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const accordions = [
    {
        id: "accordion1",
        title: "What is Frontend Mentor, and how will it help me?",
        text:
        "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
    },
    {
        id: "accordion2",
        title: "Is Frontend Mentor free?",
        text:
        "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
    },
    {
        id: "accordion3",
        title: "Can I use Frontend Mentor projects in my portfolio?",
        text:
        "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
    },
    {
        id: "accordion4",
        title:
        "How can I get help if I'm stuck on a Frontend Mentor challenge?",
        text:
        "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
    },
];

function App() {
    const [selected, setSelected] = useState<string | false>(false);

    const handleChange = (panel: string) => (_: any, isExpanded: boolean) => {
        setSelected(isExpanded ? panel : false);
    };

    const isMobile = useMediaQuery("(max-width: 460px)");
    return (
        <>
            <Box component={'body'} sx={{
                minHeight: '100vh',
                backgroundColor: purple[100],
                backgroundImage: !isMobile ? "url('/images/background-pattern-desktop.svg')" : "url('/images/background-pattern-mobile.svg')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% auto",
                backgroundPosition: "top",
                p:3,

                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                {/* FAQ - Section */}
                <Box sx={{
                    p: '1.5rem',
                    backgroundColor: 'white',
                    borderRadius: 2,
                    fontFamily: "Work Sans, sans-serif",
                    maxWidth: 700
                }}>
                    {/* header */}
                    <Box sx={{
                        display: 'flex',
                        gap: 5,
                        alignItems: 'center',
                    }}>
                        <Box component={'img'} src={"/images/icon-star.svg"}/>
                        <Typography variant="h3" sx={{
                            fontWeight: 700,
                            fontFamily: 'inherit',
                            color: 'hsl(292, 42%, 14%)'
                        }} component="h1">
                            FAQs
                        </Typography>
                    </Box>
                    {/* Main section */}
                    <Box component={'section'}>
                        {accordions.map((item) => (
                            <Accordion
                                key={item.id}
                                expanded={selected === item.id}
                                onChange={handleChange(item.id)}
                                sx={{
                                    boxShadow: "none",
                                    backgroundColor: "transparent",
                                }}
                            >
                                <AccordionSummary
                                    aria-controls={`${item.id}-content`}
                                    id={`${item.id}-header`}
                                    sx={{
                                        "&:focus-visible": {
                                            outline: "2px solid",
                                            outlineColor: purple[500],
                                        }
                                    }}
                                    expandIcon={selected !== item.id ? (
                                        <AddCircleIcon aria-hidden="true" sx={{ color: purple[400], fontSize: 28 }} />
                                    ) : (
                                        <RemoveCircleIcon aria-hidden="true" sx={{ color: purple[900], fontSize: 28 }} />
                                    )
                                }
                                >
                                <Typography
                                    sx={{
                                        fontFamily: "Work Sans, sans-serif",
                                        color: "hsl(292, 42%, 14%)",
                                        fontWeight: 700,
                                    }}
                                >
                                    {item.title}
                                </Typography>
                                </AccordionSummary>
                                <AccordionDetails
                                    id={`${item.id}-details`}
                                    sx={{
                                        fontFamily: "Work Sans, sans-serif",
                                    }}
                                >
                                    {item.text}
                                </AccordionDetails>
                            </Accordion>
                        ))}
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default App