

const Faq = () => {
    return (
        <section className="bg-gray-200 dark:text-gray-800 rounded-xl">
	<div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
		<h2 className="text-2xl font-semibold text-center sm:text-4xl">Frequently Asked Questions</h2>
		<p className="mt-4 mb-8 dark:text-gray-600"></p>
		<div className="space-y-4">

			<details className="w-full border border-blue-300 rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">What does the job assessment involve?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">Candidates might want to know the format of the assessment, whether it's coding challenges, a take-home project, or something else. </p>
			</details>

			<details className="w-full border border-black rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">How long will the assessment take to complete?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">Knowing the time commitment required can help candidates plan accordingly. </p>
			</details>

			<details className="w-full border border-red-400 rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">What technologies/languages will be assessed?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">Candidates may want clarification on which specific skills they need to demonstrate proficiency in. </p>
			</details>

			<details className="w-full border border-green-300 rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">Will there be technical interviews following the assessment?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">Understanding the hiring process can give candidates a better idea of what to expect. </p>
			</details>

			<details className="w-full border border-blue-300 rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">Are there any specific guidelines or requirements for the assessment?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">Clear instructions can help candidates approach the assessment effectively. </p>
			</details>

			<details className="w-full border border-black rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">Are there any opportunities for collaboration or assistance during the assessment??</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">Clarifying whether candidates can seek help or collaborate with others can influence their approach to problem-solving. </p>
			</details>

		</div>
	</div>
</section>
    );
};

export default Faq;