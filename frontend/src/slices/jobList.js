import { createSlice } from "@reduxjs/toolkit";

const jobList = createSlice({
    name: 'jobList',
    initialState: {
        jobs: [
            {
                id: 1,
                title: 'Senior Frontend Developer',
                company: 'TechCorp Inc.',
                location: 'San Francisco, CA',
                type: 'Full-time',
                salary: '$120k - $160k',
                posted: '2 days ago',
                description: 'Looking for an experienced Frontend Developer to join our innovative team and work on cutting-edge web applications.',
                tags: ['React', 'TypeScript', 'CSS'],
                logo: '🚀',
                rating: 4.8
            },
            {
                id: 2,
                title: 'Product Manager',
                company: 'StartupX',
                location: 'New York, NY',
                type: 'Full-time',
                salary: '$100k - $140k',
                posted: '1 day ago',
                description: 'Join our fast-growing startup as a Product Manager and shape the future of our innovative platform.',
                tags: ['Strategy', 'Analytics', 'Leadership'],
                logo: '💡',
                rating: 4.6
            },
            {
                id: 3,
                title: 'UX/UI Designer',
                company: 'DesignStudio',
                location: 'Austin, TX',
                type: 'Contract',
                salary: '$80k - $110k',
                posted: '3 days ago',
                description: 'Creative UX/UI Designer needed to craft beautiful user experiences for our diverse client portfolio.',
                tags: ['Figma', 'Prototyping', 'Research'],
                logo: '🎨',
                rating: 4.7
            },
            {
                id: 4,
                title: 'Data Scientist',
                company: 'DataFlow Analytics',
                location: 'Seattle, WA',
                type: 'Full-time',
                salary: '$130k - $170k',
                posted: '4 days ago',
                description: 'Seeking a talented Data Scientist to drive insights from complex datasets and build predictive models.',
                tags: ['Python', 'Machine Learning', 'SQL'],
                logo: '📊',
                rating: 4.9
            },
            {
                id: 5,
                title: 'Marketing Specialist',
                company: 'BrandBoost',
                location: 'Chicago, IL',
                type: 'Part-time',
                salary: '$50k - $70k',
                posted: '5 days ago',
                description: 'Dynamic Marketing Specialist to develop and execute comprehensive marketing campaigns across multiple channels.',
                tags: ['Digital Marketing', 'SEO', 'Content'],
                logo: '📈',
                rating: 4.4
            },
            {
                id: 6,
                title: 'DevOps Engineer',
                company: 'CloudTech Solutions',
                location: 'Remote',
                type: 'Full-time',
                salary: '$110k - $150k',
                posted: '1 week ago',
                description: 'Experienced DevOps Engineer to manage our cloud infrastructure and streamline deployment processes.',
                tags: ['AWS', 'Docker', 'Kubernetes'],
                logo: '☁️',
                rating: 4.5
            }
        ]
    },
    reducers: {
        setJobList: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { setJobList } = jobList.actions

// 👇 Export the reducer as default
export default jobList.reducer
