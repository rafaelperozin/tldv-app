import React, {ReactNode, useEffect, useMemo} from 'react';
import ReactDom from 'react-dom';

export interface ModalProps {
	children: ReactNode;
	className?: string;
	open: boolean;
	onClose: () => void;
}

export const Modal = ({children, className, open, onClose}: ModalProps) => {
	const customClass = useMemo(() => (className ? ` ${className}` : ''), [className]);
	const modalContainer: HTMLElement = document.getElementById('modal')!;

	useEffect(() => {
		if (open) {
			document.body.className = 'modal-show';
		} else {
			document.body.classList.remove('modal-show');
		}
	}, [open]);

	if (!open) return null;

	return ReactDom.createPortal(
		<div className={`modal${customClass}`}>
			<div className="modal__background" onClick={() => onClose()}></div>
			<div className="modal__box">
				<div className="modal__close" onClick={() => onClose()}></div>
				<div className="modal__body">{children}</div>
			</div>
		</div>,
		modalContainer,
	);
};
