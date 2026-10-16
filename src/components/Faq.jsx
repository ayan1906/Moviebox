import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import { ChevronDown } from 'lucide-react';

export default function Faq() {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const faqList = [
        {
            id: 'panel1',
            title: 'What is FlowFlix?',
            details: 'FlowFlix is a free streaming platform where you can watch movies and TV shows.'
        },
        {
            id: 'panel2',
            title: 'Is Flix really free?',
            details: 'Flix is a free streaming app for everyone, no crediit cards or subcription cost or hidden fees. To keep our service free and legal.'
        },
        {
            id: 'panel3',
            title: 'Where is flix available?',
            details: 'Flix is available in almost every country in the world.'
        },
        {
            id: 'panel4',
            title: 'Where can i wantch Flix?',
            details: 'Watch Flix instantly online from your persoonal computerr or on any internet-connected device that offers a Flix app.'
        },
        {
            id: 'panel5',
            title: 'Do I need a Flix account?',
            details: 'You do not need to create an account to use Plex, but you get more when you do. Benefits that come with your free account include more free content, access to your very own universal Watchlist, customize the streaming services that show up in your search results, the ability to pick up where you left off on any device, and more.'
        },

        {
            id: 'panel6',
            title: 'How can i personlize my flix experience?',
            details: 'Its free and easy. Just create your free Plex account, and you can add movies to your own universal Watchlist, add favorite channels to your live TV lineup, personalize your streaming services, and more.'
        },
    ];

    return (
        <div className="max-w-3xl mx-auto px-4 py-10">
            <div className="flex justify-center text-white text-2xl font-bold mb-6">
                <h1>Frequently Asked Questions</h1>
            </div>
            {faqList.map((item) => (
                <Accordion
                    key={item.id}
                    expanded={expanded === item.id}
                    onChange={handleChange(item.id)}
                    sx={{
                        backgroundColor: '#1c1d21',
                        color: '#ffffff',
                        marginBottom: '12px',
                        borderRadius: '10px !important',
                        border: '1px solid rgba(255,255,255,0.1)',
                        '&:before': { display: 'none' }, // MUI-এর ডিফল্ট সাদা দাগ সরানোর জন্য
                    }}
                >
                    <AccordionSummary
                        expandIcon={<ChevronDown className="text-white" />}
                    >
                        <Typography component="span" sx={{ width: '40%', flexShrink: 0, fontWeight: 'bold' }}>
                            {item.title}
                        </Typography>


                    </AccordionSummary>

                    {/* ভেতরের উত্তর */}
                    <AccordionDetails sx={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                        <Typography sx={{ color: '#d1d5db' }}>
                            {item.details}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>
    );
}