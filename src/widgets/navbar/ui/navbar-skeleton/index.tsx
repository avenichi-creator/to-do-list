import React from 'react';
import { SkeletonLink } from 'shared/ui/skeleton-link';
import './styles.css';

export function NavbarSkeleton() {
	return (
		<nav className="navbar-skeleton">
			<SkeletonLink />
			<SkeletonLink />
			<SkeletonLink />
		</nav>
	);
}
