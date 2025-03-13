export const getsuggestionResponse = (userName:string) => {
    return `
Dear ${userName},

Thank you for taking the time to submit your suggestion to ConKurrent! We truly value your input, as it helps us shape meaningful discussions and create content that resonates with our audience.

Your suggestion has been received and will be reviewed shortly!
`
}

export const collabResponse = (userName:string) => {
    return `
Dear ${userName},  

Thank you for submitting your suggestion to ConKurrent! We appreciate your input and are excited to hear your ideas.  

We've also noted your interest in being featured, and we'll be considering it as we review your suggestion. Stay tuned, and we'll be in touch if an opportunity arises!
`
}


export const feedbackTitle = 'Thank you for your suggestion - ConKurrent'