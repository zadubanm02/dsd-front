<template>
    <div class="h-full flex items-start justify-center bg-teal-400 py-0" >
		<div class="flex w-full max-w-xs p-4 bg-teal-400" >
			<ul class="flex flex-col w-full">
				<li class="my-px">
					<span class="flex font-bold text-sm text-white px-4 my-4 uppercase">Pages</span>
				</li>
				<li class="my-px hover:text-black">
					<a href="#"
					   class="flex flex-row items-center h-12 px-4 rounded-lg text-white hover:bg-gray-100 hover:text-black">
						<span class="flex items-center justify-center text-lg ">
							<svg fill="none"
								 stroke-linecap="round"
								 stroke-linejoin="round"
								 stroke-width="2"
								 viewBox="0 0 24 24"
								 stroke="currentColor"
								 class="h-6 w-6">
								<path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
							</svg>
						</span>
						<router-link to="/"><span class="ml-3 font-extrabold">Employees</span></router-link>
					</a>
				</li>
				<li class="my-px">
					<a href="#"
					   class="flex flex-row items-center h-12 px-4 rounded-lg text-white hover:bg-gray-100 hover:text-black">
						<span class="flex items-center justify-center text-lg ">
							<svg fill="none"
								 stroke-linecap="round"
								 stroke-linejoin="round"
								 stroke-width="2"
								 viewBox="0 0 24 24"
								 stroke="currentColor"
								 class="h-6 w-6">
								<path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
							</svg>
						</span>
						<router-link to="/departments"><span class="ml-3 font-extrabold">Departments</span></router-link>
					</a>
				</li>
				<li class="my-px">
					<a href="#"
					   class="flex flex-row items-center h-12 px-4 rounded-lg text-white hover:bg-gray-100 hover:text-black">
						<span class="flex items-center justify-center text-lg  ">
							<svg fill="none"
								 stroke-linecap="round"
								 stroke-linejoin="round"
								 stroke-width="2"
								 viewBox="0 0 24 24"
								 stroke="currentColor"
								 class="h-6 w-6">
								<path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
							</svg>
						</span>
						<router-link to="/new"><span class="ml-3 font-extrabold">Add new</span></router-link>
					</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
    name:'Navigation'
}
</script>